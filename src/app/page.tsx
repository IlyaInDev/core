import { CoursesList } from "@/features/courses-list/pub/courses-list";
import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";
import { Button } from "@/shared/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <h1>Courses</h1>
      <CreateCourseForm
        revalidatePagePath="/"
        className="max-w-[300px] mb-10"
      />
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}
