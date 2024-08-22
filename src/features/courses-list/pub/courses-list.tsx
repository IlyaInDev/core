import { revalidatePath } from "next/cache";
import { courseRepository } from "../courses.repository";
import { CourseItem } from "../ui/courses-item";

export async function CoursesList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const courseList = await courseRepository.getCoursesList();

  const handleDeleteAction = async (courseId: string) => {
    "use server";

    await courseRepository.deleteCourseElement({ id: courseId });
    await revalidatePath(revalidatePagePath);
  };

  return (
    <div className="flex flex-col gap-3">
      {courseList.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          onDelete={handleDeleteAction.bind(null, course.id)}
        />
      ))}
    </div>
  );
}
