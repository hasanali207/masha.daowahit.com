"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";

import api from "@/lib/axios";
import { AcademicInfo, useAcademicInfo } from "@/lib/useAcademicInfo";
import toast from "react-hot-toast";

// ========================================
// TYPES
// ========================================

type TextFieldKey =
  | "name"
  | "shortName"
  | "tagline"
  | "establishedYear"
  | "eiinNumber"
  | "description"
  | "mission"
  | "vision"
  | "phone"
  | "secondaryPhone"
  | "email"
  | "website"
  | "address"
  | "city"
  | "country"
  | "mapEmbedUrl"
  | "facebookUrl"
  | "youtubeUrl"
  | "principalName"
  | "signature2Name"
  | "signature2Designation"
  | "signature3Name"
  | "signature3Designation"
  | "signature4Name"
  | "signature4Designation"
  | "principalMessage";

type ImageFieldKey =
  | "logo"
  | "banner"
  | "favicon"
  | "principalSignature"
  | "signature2Image"
  | "signature3Image"
  | "signature4Image";

type AcademicInfoFormValues = Record<TextFieldKey, string>;

type AcademicInfoField = {
  name: TextFieldKey;
  label: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
};

type SignatureBlock = {
  title: string;
  nameKey: TextFieldKey;
  designationKey?: TextFieldKey;
  imageKey: ImageFieldKey;
};

// ========================================
// BASIC FIELDS
// ========================================

const basicFields: AcademicInfoField[] = [
  {
    name: "name",
    label: "Institution Name",
    placeholder: "Enter institution name",
  },
  {
    name: "shortName",
    label: "Short Name",
    placeholder: "Enter short name",
  },
  {
    name: "tagline",
    label: "Tagline",
    placeholder: "Enter tagline",
  },
  {
    name: "establishedYear",
    label: "Established Year",
    type: "number",
  },
  {
    name: "eiinNumber",
    label: "EIIN Number",
  },
  {
    name: "description",
    label: "Description",
    textarea: true,
  },
  {
    name: "mission",
    label: "Mission",
    textarea: true,
  },
  {
    name: "vision",
    label: "Vision",
    textarea: true,
  },
];

// ========================================
// CONTACT FIELDS
// ========================================

const contactFields: AcademicInfoField[] = [
  {
    name: "phone",
    label: "Phone",
  },
  {
    name: "secondaryPhone",
    label: "Secondary Phone",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "website",
    label: "Website",
  },
  {
    name: "address",
    label: "Address",
    textarea: true,
  },
  {
    name: "city",
    label: "City",
  },
  {
    name: "country",
    label: "Country",
  },
  {
    name: "mapEmbedUrl",
    label: "Google Map Embed URL",
  },
  {
    name: "facebookUrl",
    label: "Facebook URL",
  },
  {
    name: "youtubeUrl",
    label: "YouTube URL",
  },
];

// ========================================
// IMAGE FIELDS
// ========================================

const imageFields: {
  name: ImageFieldKey;
  label: string;
}[] = [
  {
    name: "logo",
    label: "Institution Logo",
  },
  {
    name: "banner",
    label: "Institution Banner",
  },
  {
    name: "favicon",
    label: "Favicon",
  },
];

// ========================================
// SIGNATURE BLOCKS
// ========================================

const signatureBlocks: SignatureBlock[] = [
  {
    title: "Principal Signature",
    nameKey: "principalName",
    imageKey: "principalSignature",
  },
  {
    title: "Second Signature",
    nameKey: "signature2Name",
    designationKey: "signature2Designation",
    imageKey: "signature2Image",
  },
  {
    title: "Third Signature",
    nameKey: "signature3Name",
    designationKey: "signature3Designation",
    imageKey: "signature3Image",
  },
  {
    title: "Fourth Signature",
    nameKey: "signature4Name",
    designationKey: "signature4Designation",
    imageKey: "signature4Image",
  },
];

// ========================================
// INITIAL FORM VALUES
// ========================================

const initialFormValues: AcademicInfoFormValues = {
  name: "",
  shortName: "",
  tagline: "",
  establishedYear: "",
  eiinNumber: "",
  description: "",
  mission: "",
  vision: "",
  phone: "",
  secondaryPhone: "",
  email: "",
  website: "",
  address: "",
  city: "",
  country: "",
  mapEmbedUrl: "",
  facebookUrl: "",
  youtubeUrl: "",
  principalName: "",
  signature2Name: "",
  signature2Designation: "",
  signature3Name: "",
  signature3Designation: "",
  signature4Name: "",
  signature4Designation: "",
  principalMessage: "",
};

// ========================================
// COMPONENT
// ========================================

export default function AcademicInfoUI() {
  const { info, loading: fetching, error, refetch } = useAcademicInfo();

  const [form, setForm] = useState<AcademicInfoFormValues>(initialFormValues);

  const [existing, setExisting] = useState<AcademicInfo | null>(null);

  const [files, setFiles] = useState<Partial<Record<ImageFieldKey, File>>>({});

  const [previewUrls, setPreviewUrls] = useState<
    Partial<Record<ImageFieldKey, string>>
  >({});

  const [saving, setSaving] = useState(false);

  // ========================================
  // LOAD DATA INTO FORM
  // ========================================

  useEffect(() => {
    if (!info) return;

    setExisting(info);

    const textValues: AcademicInfoFormValues = {
      ...initialFormValues,
    };

    [...basicFields, ...contactFields].forEach((field) => {
      textValues[field.name] = String(info[field.name] ?? "");
    });

    signatureBlocks.forEach((signature) => {
      textValues[signature.nameKey] = String(info[signature.nameKey] ?? "");

      if (signature.designationKey) {
        textValues[signature.designationKey] = String(
          info[signature.designationKey] ?? "",
        );
      }
    });

    textValues.principalMessage = info.principalMessage ?? "";

    setForm(textValues);
  }, [info]);

  // ========================================
  // FILE PREVIEW
  // ========================================

  useEffect(() => {
    const urls: Partial<Record<ImageFieldKey, string>> = {};

    Object.entries(files).forEach(([key, file]) => {
      if (file) {
        urls[key as ImageFieldKey] = URL.createObjectURL(file);
      }
    });

    setPreviewUrls(urls);

    return () => {
      Object.values(urls).forEach((url) => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, [files]);

  // ========================================
  // INPUT CHANGE
  // ========================================

  const handleInputChange = (name: TextFieldKey, value: string) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ========================================
  // FILE CHANGE
  // ========================================

  const handleFileChange = (name: ImageFieldKey, file?: File) => {
    setFiles((prev) => {
      const updated = { ...prev };

      if (file) {
        updated[name] = file;
      } else {
        delete updated[name];
      }

      return updated;
    });
  };

  // ========================================
  // GET IMAGE PREVIEW
  // ========================================

  const getPreview = (name: ImageFieldKey) => {
    return (
      previewUrls[name] || (existing?.[name] as string | null | undefined) || ""
    );
  };

  // ========================================
  // FORM SUBMIT
  // ========================================

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setSaving(true);

      const formData = new FormData();

      const payload = {
        ...form,
        establishedYear: form.establishedYear
          ? Number(form.establishedYear)
          : null,
      };

      formData.append("data", JSON.stringify(payload));

      Object.entries(files).forEach(([key, file]) => {
        if (file) {
          formData.append(key, file);
        }
      });

      await api.put("/api/v1/academic-info", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Academic information updated successfully!");

      setFiles({});

      await refetch();
    } catch (error: any) {
      console.error("Academic info update error:", error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to update academic information",
      );
    } finally {
      setSaving(false);
    }
  };

  // ========================================
  // RENDER TEXT FIELD
  // ========================================

  const renderTextField = (field: AcademicInfoField) => {
    return (
      <div key={field.name} className="space-y-2">
        <label className="block text-sm font-medium">{field.label}</label>

        {field.textarea ? (
          <textarea
            value={form[field.name]}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            placeholder={field.placeholder || field.label}
            rows={4}
            className="w-full rounded-md border p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <input
            type={field.type || "text"}
            value={form[field.name]}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            placeholder={field.placeholder || field.label}
            className="w-full rounded-md border p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
      </div>
    );
  };

  // ========================================
  // RENDER FILE INPUT
  // ========================================

  const renderFileInput = (name: ImageFieldKey, label: string) => {
    const preview = getPreview(name);

    return (
      <div key={name} className="space-y-3">
        <label className="block text-sm font-medium">{label}</label>

        {preview && (
          <div className="rounded-md border p-3">
            <img
              src={preview}
              alt={label}
              className="h-32 max-w-full rounded object-contain"
            />
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(name, e.target.files?.[0])}
          className="w-full rounded-md border p-2"
        />
      </div>
    );
  };

  // ========================================
  // LOADING / ERROR
  // ========================================

  if (fetching && !info) {
    return <div className="p-6">Loading academic information...</div>;
  }

  if (error && !info) {
    return (
      <div className="space-y-3 p-6">
        <p className="text-red-500">{error}</p>

        <button
          type="button"
          onClick={() => refetch()}
          className="rounded-md bg-blue-600 px-4 py-2 text-white"
        >
          Retry
        </button>
      </div>
    );
  }

  // ========================================
  // MAIN UI
  // ========================================

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* BASIC INFORMATION */}

      <section className="space-y-5 rounded-lg border p-5">
        <h2 className="text-lg font-semibold">Basic Information</h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {basicFields.map(renderTextField)}
        </div>
      </section>

      {/* CONTACT INFORMATION */}

      <section className="space-y-5 rounded-lg border p-5">
        <h2 className="text-lg font-semibold">Contact Information</h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {contactFields.map(renderTextField)}
        </div>
      </section>

      {/* IMAGES */}

      <section className="space-y-5 rounded-lg border p-5">
        <h2 className="text-lg font-semibold">Institution Images</h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {imageFields.map((field) => renderFileInput(field.name, field.label))}
        </div>
      </section>

      {/* SIGNATURES */}

      <section className="space-y-5 rounded-lg border p-5">
        <h2 className="text-lg font-semibold">Signature Information</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {signatureBlocks.map((signature) => (
            <div
              key={signature.nameKey}
              className="space-y-4 rounded-md border p-4"
            >
              <h3 className="font-medium">{signature.title}</h3>

              {renderTextField({
                name: signature.nameKey,
                label: "Name",
              })}

              {signature.designationKey &&
                renderTextField({
                  name: signature.designationKey,
                  label: "Designation",
                })}

              {renderFileInput(signature.imageKey, "Signature Image")}
            </div>
          ))}
        </div>
      </section>

      {/* PRINCIPAL MESSAGE */}

      <section className="space-y-5 rounded-lg border p-5">
        <h2 className="text-lg font-semibold">Principal Message</h2>

        {renderTextField({
          name: "principalMessage",
          label: "Message",
          textarea: true,
        })}
      </section>

      {/* SUBMIT */}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={saving}
          className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Academic Information"}
        </button>
      </div>
    </form>
  );
}
