"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, User, Clock3 } from "lucide-react";
import Link from "next/link";

import Snackbar from "@/components/SnackBar";
import useSnackbar from "@/hooks/useSnackbar";

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [remainingMinutes, setRemainingMinutes] = useState(0);

  const {
    snackbar,
    showSnackbar,
  } = useSnackbar();

  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    techStack: "",
    codingLanguages: "",
    experience: "",
  });

  const [projects, setProjects] = useState([
    {
      name: "",
      description: "",
      techStack: "",
    },
  ]);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const response = await fetch("/api/me");
      const data = await response.json();

      if (data.authenticated) {
        const user = data.user;

        setRemainingMinutes(user.timer || 0);

        setForm({
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          email: user.email || "",
          phone: user.phone || "",
          techStack: user.techStack || "",
          codingLanguages: user.codingLanguages || "",
          experience: user.experience || "",
        });

        setProjects(
          user.projects?.length
            ? user.projects
            : [
                {
                  name: "",
                  description: "",
                  techStack: "",
                },
              ]
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  //@ts-ignore

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        name: "",
        description: "",
        techStack: "",
      },
    ]);
  };
  //@ts-ignore
  const removeProject = (index) => {
    if (projects.length === 1) return;

    setProjects(
      projects.filter((_, i) => i !== index)
    );
  };
  //@ts-ignore
  const updateProjectName = (index, value) => {
    const updated = [...projects];
    updated[index].name = value;
    setProjects(updated);
  };

  const updateProjectDescription = (
  //@ts-ignore
    index,value
  ) => {
    const updated = [...projects];
    updated[index].description = value;
    setProjects(updated);
  };

  const updateProjectTechStack = (
  //@ts-ignore
    index,value
  ) => {
    const updated = [...projects];
    updated[index].techStack = value;
    setProjects(updated);
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const response = await fetch(
        "/api/update-profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            email: form.email.toLowerCase(),
            projects,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.error);
        return;
      }

      showSnackbar(
        "Profile updated successfully"
      );
    } catch (error) {
      alert("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  /* =====================================================
     LOADING
  ===================================================== */

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">

        <div className="relative flex h-14 w-14 items-center justify-center">

          <div className="absolute h-14 w-14 rounded-full bg-blue-200 animate-ping opacity-40" />

          <div className="relative h-10 w-10 rounded-full bg-blue-600 animate-pulse" />

        </div>

        <p className="mt-5 text-sm font-medium text-slate-500">
          Loading profile...
        </p>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">

      <Snackbar
        open={snackbar.open}
        message={snackbar.message}
        type={snackbar.type}
      />

      <div className="max-w-5xl mx-auto px-6">

        {/* =====================================================
            MAIN CARD
        ===================================================== */}

        <div className="bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">

          {/* =====================================================
              HEADER
          ===================================================== */}

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <User
                  size={27}
                  className="text-blue-600"
                />
              </div>

              <div>

                <h1 className="text-3xl md:text-4xl font-bold text-slate-950">
                  My Profile
                </h1>

                <p className="text-slate-500 mt-1">
                  Update your professional details
                </p>

              </div>

            </div>


            {/* =================================================
                REMAINING MINUTES
            ================================================= */}

            <div
              className="
                flex
                items-center
                gap-4
                bg-blue-50
                border
                border-blue-100
                rounded-xl
                px-5
                py-4
              "
            >

              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <Clock3
                  size={20}
                  className="text-white"
                />
              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Remaining minutes
                </p>

                <p className="text-2xl font-bold text-slate-950">
                  {remainingMinutes} min
                </p>

              </div>

              <Link
                href="/#pricing"
                className="
                  ml-2
                  px-5
                  py-2.5
                  rounded-lg
                  text-sm
                  font-semibold
                  text-white
                  bg-blue-600
                  hover:bg-blue-700
                  transition-colors
                  whitespace-nowrap
                "
              >
                Get More Minutes
              </Link>

            </div>

          </div>


          {/* =====================================================
              PERSONAL INFORMATION
          ===================================================== */}

          <div>

            <div className="mb-5">

              <h2 className="text-xl font-bold text-slate-950">
                Personal Information
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Manage your basic account information.
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              {/* FIRST NAME */}
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  p-4
                  bg-white
                  text-slate-900
                  outline-none
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-500/10
                  transition
                "
              />

              {/* LAST NAME */}
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  p-4
                  bg-white
                  text-slate-900
                  outline-none
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-500/10
                  transition
                "
              />

              {/* EMAIL */}
              <input
                value={form.email}
                disabled
                className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  p-4
                  bg-slate-100
                  text-slate-500
                  cursor-not-allowed
                "
              />

              {/* PHONE */}
              <input
                value={form.phone}
                disabled
                className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  p-4
                  bg-slate-100
                  text-slate-500
                  cursor-not-allowed
                "
              />

            </div>


            {/* =================================================
                PROFESSIONAL INFORMATION
            ================================================= */}

            <div className="mt-10 mb-5">

              <h2 className="text-xl font-bold text-slate-950">
                Professional Information
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Add your technical skills and experience.
              </p>

            </div>
<div className="grid md:grid-cols-2 gap-5">

  {/* TECH STACK */}
  <div>
    <label
      htmlFor="techStack"
      className="block text-sm font-semibold text-slate-700 mb-2"
    >
      Tech Stack
    </label>

    <input
      id="techStack"
      name="techStack"
      value={form.techStack}
      onChange={handleChange}
      placeholder="e.g. React, Next.js, Node.js"
      className="
        w-full
        border
        border-slate-200
        rounded-xl
        p-4
        outline-none
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-500/10
        transition
      "
    />
  </div>


  {/* CODING LANGUAGES */}
  <div>
    <label
      htmlFor="codingLanguages"
      className="block text-sm font-semibold text-slate-700 mb-2"
    >
      Coding Languages
    </label>

    <input
      id="codingLanguages"
      name="codingLanguages"
      value={form.codingLanguages}
      onChange={handleChange}
      placeholder="e.g. JavaScript, TypeScript, Python"
      className="
        w-full
        border
        border-slate-200
        rounded-xl
        p-4
        outline-none
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-500/10
        transition
      "
    />
  </div>

</div>

            <div className="mt-5">

              <input
                name="experience"
                value={form.experience}
                onChange={handleChange}
                placeholder="Experience"
                className="
                  w-full
                  border
                  border-slate-200
                  rounded-xl
                  p-4
                  outline-none
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-500/10
                  transition
                "
              />

            </div>


            {/* =================================================
                PROJECTS
            ================================================= */}

            <div className="mt-10">

              <div className="flex items-center justify-between mb-5">

                <div>

                  <h2 className="text-2xl font-bold text-slate-950">
                    Projects
                  </h2>

                  <p className="text-sm text-slate-500 mt-1">
                    Add projects and technologies you have worked with.
                  </p>

                </div>

                <button
                  onClick={addProject}
                  className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2.5
                    rounded-lg
                    bg-blue-50
                    border
                    border-blue-100
                    text-blue-700
                    font-semibold
                    hover:bg-blue-100
                    transition-colors
                  "
                >
                  <Plus size={18} />
                  Add Project
                </button>

              </div>


              {projects.map(
                (project, index) => (

                  <div
                    key={index}
                    className="
                      border
                      border-slate-200
                      rounded-xl
                      p-5
                      mb-4
                      bg-slate-50/60
                    "
                  >

                    <div className="flex justify-between mb-4">

                      <div className="flex items-center gap-3">

                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>

                        <h3 className="font-semibold text-slate-900">
                          Project {index + 1}
                        </h3>

                      </div>


                      {index > 0 && (
                        <button
                          onClick={() =>
                            removeProject(index)
                          }
                          className="
                            w-9
                            h-9
                            rounded-lg
                            flex
                            items-center
                            justify-center
                            text-slate-400
                            hover:text-red-600
                            hover:bg-red-50
                            transition
                          "
                          aria-label="Remove project"
                        >
                          <Trash2 size={18} />
                        </button>
                      )}

                    </div>


                    {/* PROJECT NAME */}
                    <input
                      value={project.name}
                      onChange={(e) =>
                        updateProjectName(
                          index,
                          e.target.value
                        )
                      }
                      placeholder="Project Name"
                      className="
                        w-full
                        border
                        border-slate-200
                        rounded-xl
                        p-4
                        mb-3
                        bg-white
                        outline-none
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-500/10
                        transition
                      "
                    />


                    {/* DESCRIPTION */}
                    <textarea
                      rows={4}
                      value={project.description}
                      onChange={(e) =>
                        updateProjectDescription(
                          index,
                          e.target.value
                        )
                      }
                      placeholder="Project Description"
                      className="
                        w-full
                        border
                        border-slate-200
                        rounded-xl
                        p-4
                        bg-white
                        outline-none
                        resize-y
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-500/10
                        transition
                      "
                    />


                    {/* TECH STACK */}
                    <input
                      value={project.techStack || ""}
                      onChange={(e) =>
                        updateProjectTechStack(
                          index,
                          e.target.value
                        )
                      }
                      placeholder="Project TechStack. (Ex:- React.JS, Next.JS, JavaScript)"
                      className="
                        w-full
                        border
                        border-slate-200
                        rounded-xl
                        p-4
                        mt-3
                        bg-white
                        outline-none
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-500/10
                        transition
                      "
                    />

                  </div>
                )
              )}

            </div>


            {/* =================================================
                SAVE
            ================================================= */}

            <button
              onClick={handleSave}
              disabled={saving}
              className="
                mt-8
                w-full
                py-4
                rounded-xl
                text-white
                font-semibold
                bg-blue-600
                hover:bg-blue-700
                shadow-lg
                shadow-blue-600/10
                disabled:opacity-50
                disabled:cursor-not-allowed
                transition-all
                duration-200
              "
            >
              {saving
                ? "Updating..."
                : "Update Profile"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}