import { Certification, EducationItem, Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Akash Yadav',
  title: 'Aspiring Full-Stack Developer',
  subtitle: 'Building practical web & software projects while learning full-stack development and cybersecurity fundamentals.',
  email: 'akash2707yadav@gmail.com',
  phone: '+91 9569261314',
  location: 'Lucknow, Uttar Pradesh, India',
  github: 'https://github.com/Akash-yadav2707',
  linkedin: 'https://www.linkedin.com/in/akash-yadav-166981297',
  bio: "I'm a 3rd-year B.Tech CSE (Data Science & AI) student at Shri Ramswaroop Memorial University, Lucknow. I enjoy building full-stack web applications and Java-based software systems, with a growing interest in cybersecurity. I like learning by building — from UI clones to backend systems — and I'm currently expanding my skills in Go and AI agent frameworks.",
  highlights: [
    '3rd Year B.Tech CSE (Data Science & AI)',
    'Shri Ramswaroop Memorial University',
    'Core Java & Full-Stack Enthusiast',
    'Cybersecurity & DevOps Explorer'
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' }
    ]
  },
  {
    category: 'Concepts & CS Fundamentals',
    skills: [
      { name: 'Basic Data Structures' },
      { name: 'Object-Oriented Programming (OOP)' },
      { name: 'Web Fundamentals' },
      { name: 'Cybersecurity Basics' }
    ]
  },
  {
    category: 'Developer Tools',
    skills: [
      { name: 'GitHub' },
      { name: 'Git Version Control' },
      { name: 'VS Code' },
      { name: 'Terminal / CLI' }
    ]
  },
  {
    category: 'AI & Developer Platforms',
    skills: [
      { name: 'Google AI Studio' },
      { name: 'Emergent' },
      { name: 'Claude AI' },
      { name: 'ChatGPT' }
    ]
  },
  {
    category: 'Currently Learning',
    skills: [
      { name: 'JavaScript Deep Dive' },
      { name: 'DevOps & CI/CD' },
      { name: 'Go (Golang)' },
      { name: 'AI Agent Frameworks' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'zerodha-clone',
    title: 'Zerodha Landing Page Clone',
    description: 'A pixel-inspired clone of Zerodha\'s landing page focused on clean layout, structured semantic markup, and responsive web design using pure HTML & CSS.',
    tech: ['HTML5', 'CSS3', 'Responsive Design'],
    link: 'https://zerodha-landing-page-black.vercel.app/',
    status: 'live',
    type: 'web',
    note: 'Hosted on Vercel. Recreates the clean stock trading interface aesthetic.'
  },
  {
    id: 'facebook-clone',
    title: 'Facebook Login Page Clone',
    description: 'A responsive recreation of Facebook\'s classic login interface, focused on precise form design, pixel alignment, layout accuracy, and UI polish.',
    tech: ['HTML5', 'CSS3', 'Form Styling'],
    githubUrl: 'https://github.com/Akash-yadav2707',
    status: 'coming_soon',
    type: 'web',
    note: 'Code available on request / repository push in progress.'
  },
  {
    id: 'java-bank-system',
    title: 'Java Bank Management System',
    description: 'A console-based banking system in Java implementing core banking operations — account creation, deposit, withdrawal, balance inquiry, and transaction handling — utilizing Object-Oriented Programming (OOP) principles.',
    tech: ['Java', 'OOP Principles', 'Data Structures', 'CLI'],
    githubUrl: 'https://github.com/Akash-yadav2707',
    status: 'repo_available',
    type: 'java',
    note: 'Console application with interactive menu and transaction validation.',
    codeSnippet: `// BankAccount.java - Core Account Entity
public class BankAccount {
    private String accountNumber;
    private String accountHolderName;
    private double balance;
    private List<String> transactionHistory;

    public BankAccount(String accountNumber, String name, double initialDeposit) {
        this.accountNumber = accountNumber;
        this.accountHolderName = name;
        this.balance = initialDeposit;
        this.transactionHistory = new ArrayList<>();
        transactionHistory.add("Account created with initial balance: ₹" + initialDeposit);
    }

    public boolean deposit(double amount) {
        if (amount <= 0) return false;
        balance += amount;
        transactionHistory.add("Deposited: ₹" + amount + " | New Balance: ₹" + balance);
        return true;
    }

    public boolean withdraw(double amount) {
        if (amount > balance || amount <= 0) return false;
        balance -= amount;
        transactionHistory.add("Withdrew: ₹" + amount + " | New Balance: ₹" + balance);
        return true;
    }

    public void printSummary() {
        System.out.println("=== ACCOUNT SUMMARY ===");
        System.out.println("Acc No: " + accountNumber);
        System.out.println("Holder: " + accountHolderName);
        System.out.println("Balance: ₹" + balance);
    }
}`,
    terminalOutput: `=== JAVA BANK MANAGEMENT SYSTEM ===
1. Create New Account
2. Deposit Funds
3. Withdraw Funds
4. Check Balance
5. View Transaction History
6. Exit

> Select Option: 1
Enter Name: Akash Yadav
Initial Deposit Amount: 5000
[SUCCESS] Account #BK-2026-8712 Created Successfully!

> Select Option: 2
Enter Account #: BK-2026-8712
Enter Deposit Amount: 1500
[SUCCESS] Deposited ₹1500. Updated Balance: ₹6500`
  },
  {
    id: 'java-student-system',
    title: 'Java Student Management System',
    description: 'A Java-based CRUD application to manage student records — add, update, delete, and search functionality — built using core Java and OOP concepts.',
    tech: ['Java', 'CRUD Operations', 'OOP', 'Collections Framework'],
    githubUrl: 'https://github.com/Akash-yadav2707',
    status: 'repo_available',
    type: 'java',
    note: 'Console CRUD tool featuring ID search, record filtering, and structured output.',
    codeSnippet: `// StudentManagementSystem.java
public class StudentManagementSystem {
    private Map<Integer, Student> studentMap = new HashMap<>();

    public void addStudent(int rollNo, String name, String course, double gpa) {
        if (studentMap.containsKey(rollNo)) {
            System.out.println("Student ID already exists!");
            return;
        }
        Student s = new Student(rollNo, name, course, gpa);
        studentMap.put(rollNo, s);
        System.out.println("Student record added successfully.");
    }

    public void searchStudent(int rollNo) {
        Student s = studentMap.get(rollNo);
        if (s != null) {
            s.displayDetails();
        } else {
            System.out.println("Student record not found for ID: " + rollNo);
        }
    }
}`,
    terminalOutput: `=== STUDENT MANAGEMENT SYSTEM (JAVA) ===
1. Add New Student
2. View All Records
3. Search Student by Roll No
4. Delete Student Record
5. Exit

> Select Option: 1
Enter Roll No: 101
Enter Student Name: Akash Yadav
Enter Course: B.Tech CSE (DS & AI)
[SUCCESS] Student #101 added to database.

> Select Option: 3
Enter Roll No to Search: 101
---------------------------------
Roll No : 101
Name    : Akash Yadav
Course  : B.Tech CSE (DS & AI)
Year    : 3rd Year
---------------------------------`
  }
];

export const HONORS_AWARDS = [
  {
    id: 'gdg-product-builder-day',
    title: 'Product Builder Day Participant',
    event: 'GDG Lucknow',
    year: '2026',
    description: 'Selected participant for AI Agents & Gemini Code Assist hands-on technical workshop.'
  },
  {
    id: 'academic-excellence',
    title: 'Academic Excellence Distinction',
    event: 'Shri Ramswaroop Memorial University',
    year: '2025',
    description: 'Recognized for consistent high academic performance across Data Structures and Discrete Mathematics.'
  }
];


export const CERTIFICATIONS: Certification[] = [
  {
    id: 'tcs-ion-ai-cybersecurity',
    title: 'AI and Cybersecurity Awareness',
    issuer: 'TCS iON',
    initiative: 'AI for All Initiative (MPIT–CoE in partnership with TCS Foundation)',
    date: 'April 2026',
    certificateId: '8770-31422731-1016',
    verified: true,
    details: 'Covered essential concepts of artificial intelligence fundamentals, threat detection, digital privacy, encryption basics, and safe cybersecurity practices in modern computing systems.',
    skills: ['Cybersecurity Fundamentals', 'AI Concepts', 'Threat Awareness', 'Digital Safety']
  },
  {
    id: 'futureskills-prime-stem',
    title: 'Digital Application Fundamentals (STEM)',
    issuer: 'FutureSkills Prime',
    initiative: 'MeitY–NASSCOM Digital Skilling Initiative (Certificate of Participation)',
    date: '07/02/2026',
    certificateId: '26070227893',
    verified: true,
    details: 'Recognizes active participation and foundational mastery in STEM digital applications, web protocols, and modern computing tools under the Ministry of Electronics and Information Technology (MeitY) & NASSCOM program.',
    skills: ['STEM Digital Tools', 'Web Applications', 'Computing Fundamentals']
  },
  {
    id: 'sih-2024',
    title: 'Internal Smart India Hackathon (SIH) 2024',
    issuer: 'Shri Ramswaroop Memorial University (Dept. of CSE & CSIS)',
    initiative: 'MoE\'s Innovation Cell, AICTE, IEEE, G20 & SRMU Barabanki',
    date: '6 & 7 SEP 2024',
    certificateId: 'SIH2024-SRMU-PARTICIPANT',
    verified: true,
    details: 'Certificate of Participation presented to Akash Yadav for participating in Internal Smart India Hackathon 2024 organized by Department of CSE & CSIS at Shri Ramswaroop Memorial University, Barabanki on 6 & 7 September 2024, demonstrating commitment to innovation, creativity, and teamwork.',
    skills: ['Hackathon', 'Innovation & Creativity', 'Teamwork', 'Agile Prototyping', 'Problem Solving']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    field: 'Specialization: Data Science & Artificial Intelligence',
    institution: 'Shri Ramswaroop Memorial University (SRMU)',
    location: 'Lucknow, Uttar Pradesh, India',
    year: '2022 – 2026 (Currently in 3rd Year)',
    status: 'In Progress',
    details: [
      'Focusing on Core Java, Data Structures & Algorithms, and Web Development.',
      'Exploring Cybersecurity fundamentals and practical AI agent development.',
      'Active participant in technical activities, hackathons, and software builds.'
    ]
  }
];
