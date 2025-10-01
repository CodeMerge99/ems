const employees = [
  {
    id: 1,
    email: "alice.johnson@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Design Landing Page",
        taskDescription: "Create the initial design for the product landing page.",
        taskDate: "2025-09-01",
        category: "design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve the bug causing navbar collapse on mobile.",
        taskDate: "2025-09-05",
        category: "dev",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    email: "bob.smith@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "API Integration",
        taskDescription: "Integrate user authentication API.",
        taskDate: "2025-08-29",
        category: "backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "UI Testing",
        taskDescription: "Perform UI testing on new dashboard components.",
        taskDate: "2025-09-10",
        category: "QA",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review PRs from frontend team.",
        taskDate: "2025-09-07",
        category: "dev",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "charlie.lee@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Setup CI/CD",
        taskDescription: "Automate build and deploy using GitHub Actions.",
        taskDate: "2025-08-25",
        category: "devops",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Optimize Images",
        taskDescription: "Compress and optimize all product images.",
        taskDate: "2025-09-12",
        category: "design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "diana.evans@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Create Blog Template",
        taskDescription: "Design a responsive blog layout for the CMS.",
        taskDate: "2025-09-03",
        category: "UI",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "ethan.wright@example.com",
    password: "1234",
    tasks: []
  },
  {
    id: 6,
    email: "fiona.clark@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Accessibility Audit",
        taskDescription: "Check for accessibility issues across the app.",
        taskDate: "2025-08-30",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 7,
    email: "george.adams@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Dev Meeting Notes",
        taskDescription: "Summarize and publish notes from dev team sync.",
        taskDate: "2025-09-01",
        category: "management",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 8,
    email: "hannah.scott@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Refactor Sidebar",
        taskDescription: "Improve code and structure of sidebar nav component.",
        taskDate: "2025-09-08",
        category: "frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Add Dark Mode",
        taskDescription: "Implement dark mode toggle for the UI.",
        taskDate: "2025-09-09",
        category: "frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 9,
    email: "ian.murphy@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Test Payment Flow",
        taskDescription: "End-to-end testing of Stripe payment integration.",
        taskDate: "2025-09-04",
        category: "QA",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 10,
    email: "julia.turner@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Update Docs",
        taskDescription: "Refresh onboarding documentation for new hires.",
        taskDate: "2025-09-06",
        category: "documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "1234"
  }
];


export const setLocaStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}



export const getLocalStorage=()=>{
   const employees = JSON.parse(localStorage.getItem('employees'));
   const admin = JSON.parse(localStorage.getItem('admin'));
   return {employees,admin};
}
