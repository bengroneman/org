export async function getAllResumeEntries() {
  const response = await fetch("https://admin.blueengineering.dev/api/blue-resume-entries?populate=*&sort[0]=StartDate%3Adesc")
  const resume_entries = await response.json()
  return resume_entries.data
}
