"use client";

import { Card, CardContent } from "@/components/ui/card";
import api from "@/lib/axios";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Hash,
  HeartHandshake,
  UserCheck,
  Users,
  UserX,
} from "lucide-react";
import { useEffect, useState } from "react";
interface SessionType {
  id: string;
  name: string;
}

interface StudentStatsType {
  totalStudents: number;
  activeStudents: number;
  inactiveStudents: number;
  lastCode: string;
  nextCode: string;
}

interface TeacherStatsType {
  totalTeachers: number;
  activeTeachers: number;
  inactiveTeachers: number;
  lastCode: string;
  nextCode: string;
}

interface DonorStatsType {
  totalDonors: number;
  activeDonors: number;
  inactiveDonors: number;
  lastCode: string;
  nextCode: string;
}

const AdminDashboard = () => {
  const [sessions, setSessions] = useState<SessionType[]>([]);
  const [students, setStudents] = useState<StudentStatsType>({
    totalStudents: 0,
    activeStudents: 0,
    inactiveStudents: 0,
    lastCode: "",
    nextCode: "",
  });

  const [teachers, setTeachers] = useState<TeacherStatsType>({
    totalTeachers: 0,
    activeTeachers: 0,
    inactiveTeachers: 0,
    lastCode: "",
    nextCode: "",
  });

  const [donor, setDonor] = useState<DonorStatsType>({
    totalDonors: 0,
    activeDonors: 0,
    inactiveDonors: 0,
    lastCode: "",
    nextCode: "",
  });

  const [loading, setLoading] = useState(false);
  console.log(teachers);
  console.log(donor);
  console.log(students);
  /* ------------------ FETCH DATA ------------------ */
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // BOOKINGS

        // SESSIONS
        const sessionRes = await api.get(
          `${process.env.NEXT_PUBLIC_BASE_API}/api/v1/session`,
        );
        setSessions(sessionRes.data.data || []);

        // STUDENTS
        const studentRes = await api.get(`/api/v1/student/all/studentstats`);

        setStudents(studentRes.data.data || 0);

        // TEACHERS
        const teacherRes = await api.get(`/api/v1/teacher/teacherstats`);
        setTeachers(teacherRes.data.data || []);

        const donorRes = await api.get(
          `/api/v1/monthlydonations/all/donorstats`,
        );
        setDonor(donorRes.data.data || []);
      } catch (error) {
        console.error("❌ Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* ------------------ CALCULATIONS ------------------ */

  const infoCards = [
    {
      title: "মোট শিক্ষক",
      value: teachers.totalTeachers,
      icon: Users,
      color: "bg-violet-500",
    },
    {
      title: "সক্রিয় শিক্ষক",
      value: teachers.activeTeachers,
      icon: UserCheck,
      color: "bg-purple-500",
    },
    {
      title: "নিষ্ক্রিয় শিক্ষক",
      value: teachers.inactiveTeachers,
      icon: UserX,
      color: "bg-rose-500",
    },
    {
      title: "পরবর্তী শিক্ষক আইডি",
      value: teachers.nextCode,
      icon: Hash,
      color: "bg-indigo-500",
    },
    {
      title: "মোট শিক্ষার্থী",
      value: students.totalStudents,
      icon: GraduationCap,
      color: "bg-blue-500",
    },
    {
      title: "সক্রিয় শিক্ষার্থী",
      value: students.activeStudents,
      icon: UserCheck,
      color: "bg-green-500",
    },
    {
      title: "নিষ্ক্রিয় শিক্ষার্থী",
      value: students.inactiveStudents,
      icon: UserX,
      color: "bg-red-500",
    },
    {
      title: "পরবর্তী শিক্ষার্থী আইডি",
      value: students.nextCode,
      icon: ArrowRight,
      color: "bg-cyan-500",
    },
    {
      title: "মোট দাতা সদস্য",
      value: donor.totalDonors,
      icon: HeartHandshake,
      color: "bg-pink-500",
    },
    {
      title: "সক্রিয় দাতা সদস্য",
      value: donor.activeDonors,
      icon: UserCheck,
      color: "bg-emerald-500",
    },
    {
      title: "নিষ্ক্রিয় দাতা সদস্য",
      value: donor.inactiveDonors,
      icon: UserX,
      color: "bg-rose-500",
    },
    {
      title: "পরবর্তী দাতা আইডি",
      value: donor.nextCode,
      icon: Hash,
      color: "bg-orange-500",
    },
    {
      title: "সেশন",
      value: sessions.length,
      icon: BookOpen,
      color: "bg-amber-500",
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-indigo-50 to-white overflow-y-auto min-h-screen space-y-3">
      {/* INFO CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {infoCards.map((card, idx) => {
          const Icon = card.icon;

          return (
            <Card
              key={idx}
              className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {card.title}
                    </p>

                    <h2 className="text-3xl font-bold mt-2">{card.value}</h2>
                  </div>

                  <div className={`${card.color} p-4 rounded-xl text-white`}>
                    <Icon className="h-7 w-7" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* BOOKINGS TABLE */}
      {/* <section className="bg-white rounded-xl shadow p-6 border border-indigo-100 mt-4">
        <h2 className="text-lg font-semibold text-indigo-700 mb-4">
          🧾 নতুন পেমেন্ট
        </h2>

        <p className="text-center text-gray-500 py-4">No Payments Found</p>
      </section> */}
    </div>
  );
};

export default AdminDashboard;
