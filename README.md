# YapperJobs

A web crawling project that will scrape data from 4 Job Sites.
- Hayden Janes
- Keno Reyes
- Drew Solis
- Marc Tan
- Joseph Ascensao
- Conner (Supervisor)

# YapperJobs

## Figma Design:
[View Figma Design](https://www.figma.com/file/jayrzOMwWpJlXUvItY9KhC/Tech-Job-Search-Wireframe?type=design&node-id=0-1&mode=design&t=fYxnZuoXXcYcBrzX-0)

## Functional Requirements:
1. Create a web crawler that will harvest data from the following websites:
   - Indeed: [https://www.indeed.com](https://www.indeed.com)
   - ZipRecruiter: [https://www.ziprecruiter.com](https://www.ziprecruiter.com)
   - Government Jobs: [https://www.governmentjobs.com](https://www.governmentjobs.com)
   - Monster: [https://www.monster.com](https://www.monster.com)
   
2. Create a Job Search page with the following filters:
   - Location (including remote positions)
   - Industry
   - Experience Level (junior, mid, senior, etc.)
   - Employment Type (contract, part-time, full-time, etc.)
   - Company Size (startup, small business, large corporation, etc.)
   - Salary Range
   - Benefits
   - Required Certifications
   - Keyword search
   - Display job postings with summarized information:
     - Company Name
     - Location
     - Salary Range
     - Employment Type
   - Detailed job information:
     - Experience Level
     - Industry
     - Benefits
     - Required Certifications
     - Job Description
   - Navigation to Apply page
   - Save search criteria to local storage

3. Create an Apply page with the following steps:
   a. Step 1 – Resume:
      - Display a 150-character snippet of the resume or prompt to create one
   b. Step 2 – Questions:
      - Display job posting questions (maximum of 15)
      - Prevent submission if required questions are unanswered
   c. Step 3 – Complete:
      - Message confirming application submission
      - Button to navigate back to Job Search page
      - Email notification to the employer

4. Create a Create An Account page with form fields:
   - Email Address
   - Password
   - Confirm Password
   - Account Type (User or Employer)
   - Additional fields for Employer:
     - Mobile Phone Number
     - Business Name
     - Business Website
     - Industry options

5. Create a Log In page with form fields:
   - Email Address
   - Password
   - Forgot password link to Reset Password page
   - Navigation based on account type

6. Create a Reset Password page with form field for Email Address.

7. Create a Confirm Reset Password page with form fields for new password.

8. Create a My Profile page (for User account types) with navigation items:
   - My Applications
   - Resume Builder

9. Create an Employer Dashboard page with navigation items:
   - View Applications

10. View Applications:
    - Table with columns:
      - Job Title
      - Applicant Name
      - View Resume
      - View Application
      - Status (Accepted/Declined)

11. My Applications:
    - Table with columns:
      - Status
      - Job Title
      - Company Name
      - Location
      - Date (submission date)

12. Resume Builder with sections for Summary, Work Experience, Education, Skills, Links, and Publications.
