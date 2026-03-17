export const chatbotData = [
  {
    category: "General Event Information",
    questions: [
      {
        triggers: ["what is", "about", "hackathon"],
        question: "What is the NXTGENSEC?",
        answer: "NXTGENSEC is a premier 48-hour innovation event hosted by NXTGENSEC Organization where students build tech solutions for real-world challenges."
      },
      {
        triggers: ["date", "when", "day"],
        question: "What are the dates for the hackathon?",
        answer: "The hackathon is scheduled for March 27th to March 29th, 2026."
      },
      {
        triggers: ["online", "person", "mode", "virtual"],
        question: "Is the hackathon online or in-person?",
        answer: "It's a fully in-person event at our campus to foster collaboration and networking."
      },
      {
        triggers: ["venue", "location", "where", "place"],
        question: "Where is the venue located?",
        answer: "The venue is the Central Block at NXTGENSEC Organization (MITS), Varikoli, Kochi."
      },
      {
        triggers: ["theme", "topic", "focus"],
        question: "What is the theme of this year's hackathon?",
        answer: "This year's theme is 'NXTGEN: Securing Digital Assets,' focusing on cybersecurity, blockchain, and privacy-first tech."
      },
      {
        triggers: ["schedule", "timeline", "itinerary"],
        question: "Is there a schedule available for the event?",
        answer: "Yes! Check the '/about' page for the full 48-hour timeline including meals, workshops, and judging."
      },
      {
        triggers: ["start", "end", "time"],
        question: "When does the event start and end?",
        answer: "Check-in starts Friday at 4 PM, coding begins at 6 PM. The closing ceremony is Sunday at 4 PM."
      },
      {
        triggers: ["fee", "cost", "pay", "free"],
        question: "Are there any registration fees?",
        answer: "Registration is absolutely free! We provide food, swag, and accommodation for free as well."
      },
      {
        triggers: ["international", "foreign", "outside"],
        question: "Is this event open to international participants?",
        answer: "International students are welcome, but travel arrangements must be handled by the participants."
      },
      {
        triggers: ["language", "english", "speak"],
        question: "What is the official language of the hackathon?",
        answer: "All official communication, mentoring, and pitches will be in English."
      }
    ]
  },
  {
    category: "Eligibility & Team Formation",
    questions: [
      {
        triggers: ["who", "participate", "eligibility"],
        question: "Who can participate in the hackathon?",
        answer: "Any undergraduate or postgraduate student with a passion for building can participate."
      },
      {
        triggers: ["student", "college"],
        question: "Do I need to be a student to participate?",
        answer: "Yes, this edition is primarily for students. Bring your valid college ID!"
      },
      {
        triggers: ["professional", "working", "job"],
        question: "Can working professionals join?",
        answer: "Professionals can join as mentors, but the competition is limited to students."
      },
      {
        triggers: ["size", "minimum", "maximum", "how many"],
        question: "What is the minimum and maximum team size?",
        answer: "Teams must have between 2 to 4 members."
      },
      {
        triggers: ["solo", "individual", "alone"],
        question: "Can I participate individually (solo)?",
        answer: "We encourage teamwork! Solo participants will be grouped with others during the mixer session."
      },
      {
        triggers: ["no team", "lonely"],
        question: "I don't have a team. Can I still register?",
        answer: "No worries! Join our Discord 'find-teammates' channel or meet people during the opening mixer."
      },
      {
        triggers: ["find", "looking", "teammate"],
        question: "How can I find a team or teammates?",
        answer: "Use the 'Community' page on our site or the Discord server to find like-minded builders."
      },
      {
        triggers: ["change", "edit", "update team"],
        question: "Can I change my team members after registration?",
        answer: "You can update your team details until the registration deadline."
      },
      {
        triggers: ["different", "other college"],
        question: "Can members of a team be from different colleges/organizations?",
        answer: "Absolutely! Inter-college teams are allowed and encouraged."
      },
      {
        triggers: ["age", "limit", "old"],
        question: "Is there an age limit for participants?",
        answer: "Participants must be 18 years or older as of the start of the event."
      }
    ]
  },
  {
    category: "Registration Process",
    questions: [
      {
        triggers: ["how", "register", "apply"],
        question: "How do I register for the hackathon?",
        answer: "Click the 'Register' button on the homepage and fill out the form with your team details."
      },
      {
        triggers: ["deadline", "last date"],
        question: "When is the registration deadline?",
        answer: "Registration closes on March 20th, 2026, at 11:59 PM."
      },
      {
        triggers: ["document", "id", "require"],
        question: "What documents do I need for registration?",
        answer: "You'll need a digital copy of your college ID and a profile link (GitHub/LinkedIn)."
      },
      {
        triggers: ["know", "confirm", "status"],
        question: "How will I know if my registration is confirmed?",
        answer: "You'll receive a confirmation email within 48 hours of your application being reviewed."
      },
      {
        triggers: ["edit", "wrong", "detail"],
        question: "Can I edit my registration details after submitting?",
        answer: "Use the 'Manage Team' link sent to your email to edit your details until the deadline."
      },
      {
        triggers: ["miss", "late", "past"],
        question: "I missed the deadline; can I still apply?",
        answer: "Late registrations are usually not accepted, but you can email us for waitlist inquiries."
      },
      {
        triggers: ["waitlist", "full"],
        question: "Is there a waitlist if registrations are full?",
        answer: "Yes, if we exceed capacity, we move high-quality applications to a waitlist."
      },
      {
        triggers: ["everyone", "all team"],
        question: "Do all team members need to register individually?",
        answer: "Only the team lead needs to register the entire team at once."
      },
      {
        triggers: ["no email", "not receive"],
        question: "I haven't received a confirmation email. What should I do?",
        answer: "Please check your spam folder. If it's still missing, contact us at support@NXTGENSEC.com."
      },
      {
        triggers: ["cancel", "quit"],
        question: "Can I cancel my registration?",
        answer: "Please let us know via email if you can't make it so we can give your spot to someone on the waitlist."
      }
    ]
  },
  {
    category: "Technical Requirements & Tracks",
    questions: [
      {
        triggers: ["tracks", "challenge"],
        question: "What are the different tracks or challenges available?",
        answer: "We have 4 main tracks: FinTech Security, Privacy & Blockchain, AI Safety, and Open Innovation."
      },
      {
        triggers: ["outside", "other project"],
        question: "Can we work on a project outside of the specified tracks?",
        answer: "Yes, the 'Open Innovation' track is for any project that fits the overall security theme."
      },
      {
        triggers: ["technology", "language", "stack"],
        question: "What technologies/languages are allowed?",
        answer: "You can use any tech stack you're comfortable with (MERN, Django, Flutter, Rust, etc.)."
      },
      {
        triggers: ["laptop", "bring", "computer"],
        question: "Do we need to bring our own laptops?",
        answer: "Yes, you must bring your own laptops and chargers. We provide the power strips!"
      },
      {
        triggers: ["wifi", "internet"],
        question: "Will high-speed internet/Wi-Fi be provided?",
        answer: "High-speed Wi-Fi will be provided throughout the venue."
      },
      {
        triggers: ["pre-built", "library", "framework"],
        question: "Are we allowed to use pre-built libraries or frameworks?",
        answer: "Using libraries is fine, but the core functionality of your project must be built during the event."
      },
      {
        triggers: ["ai", "chatgpt", "copilot"],
        question: "Can we use AI tools (like ChatGPT or GitHub Copilot)?",
        answer: "Yes, tools like GitHub Copilot and ChatGPT are allowed as development assistants."
      },
      {
        triggers: ["ide", "vscode", "editor"],
        question: "Is there a specific IDE we must use?",
        answer: "You can use any IDE (VS Code, IntelliJ, etc.) that you prefer."
      },
      {
        triggers: ["cloud", "aws", "azure", "gcp"],
        question: "Will there be access to cloud credits?",
        answer: "Yes, our sponsors provide credits for AWS and Google Cloud to all participants."
      },
      {
        triggers: ["pre-code", "start early"],
        question: "Can we start coding before the hackathon begins?",
        answer: "No. All coding must start after the official 'Start Coding' announcement."
      }
    ]
  },
  {
    category: "Project Submission",
    questions: [
      {
        triggers: ["how", "submit"],
        question: "How do we submit our final project?",
        answer: "Submissions are done via the 'Submit' portal on our website using your unique team ID."
      },
      {
        triggers: ["deadline", "time", "last"],
        question: "What is the deadline for project submission?",
        answer: "The portal closes at 10 AM on Sunday morning. Don't wait until the last minute!"
      },
      {
        triggers: ["code", "source", "repo"],
        question: "Do we need to submit our source code?",
        answer: "Yes, a public GitHub repository link is a mandatory part of the submission."
      },
      {
        triggers: ["github", "gitlab"],
        question: "Where should we host our code?",
        answer: "GitHub is preferred, but GitLab or Bitbucket links are also acceptable."
      },
      {
        triggers: ["video", "demo", "loom"],
        question: "Is a video demo required for the submission?",
        answer: "A 2-minute video demo (YouTube or Loom link) is required for the judges."
      },
      {
        triggers: ["document", "readme"],
        question: "What should be included in the project documentation?",
        answer: "A README file explaining the problem, solution, and tech stack is required."
      },
      {
        triggers: ["update", "after"],
        question: "Can we update our project after the submission deadline?",
        answer: "No, once the deadline passes, submissions are locked for judging."
      },
      {
        triggers: ["deck", "slide", "ppt"],
        question: "What format should the presentation slide deck be in?",
        answer: "For the final pitch, we accept PDF or Google Slides formats."
      },
      {
        triggers: ["prototype", "design", "working"],
        question: "Do we need to submit a working prototype or just a design?",
        answer: "A working prototype is highly valued. Theoretical designs only won't score high technical points."
      },
      {
        triggers: ["issue", "glitch", "stuck"],
        question: "What if we face technical issues during submission?",
        answer: "Our tech team will be available at the help desk to assist with submission glitches."
      }
    ]
  },
  {
    category: "Judging & Evaluation",
    questions: [
      {
        triggers: ["criteria", "score", "judge on"],
        question: "What are the judging criteria?",
        answer: "Projects are judged on Innovation (25%), Technical Complexity (25%), Design (20%), and Impact (30%)."
      },
      {
        triggers: ["who", "judge"],
        question: "Who are the judges for the event?",
        answer: "Our panel includes industry experts from top tech firms and MITS faculty."
      },
      {
        triggers: ["screen", "preliminary", "round"],
        question: "Is there a preliminary round of screening?",
        answer: "Yes, there's a preliminary round to select the top 10 teams for the final stage."
      },
      {
        triggers: ["how long", "pitch time"],
        question: "How long is the final pitching session?",
        answer: "Teams get 5 minutes to pitch followed by 3 minutes of Q&A."
      },
      {
        triggers: ["q&a", "question"],
        question: "Will there be a Q&A session with the judges?",
        answer: "Yes, judges will ask technical and business-related questions after your pitch."
      },
      {
        triggers: ["business", "viability", "technical skill"],
        question: "Are the judges looking for business viability or purely technical skill?",
        answer: "It's a balance! We look for both technical brilliance and a viable use case."
      },
      {
        triggers: ["when", "announce", "win"],
        question: "When will the winners be announced?",
        answer: "Winners will be announced during the closing ceremony on Sunday at 3 PM."
      },
      {
        triggers: ["final", "decision"],
        question: "Is the judge's decision final?",
        answer: "Yes, the judges' decisions are final and binding."
      },
      {
        triggers: ["feedback", "scorecard"],
        question: "Can we get feedback on our project from the judges?",
        answer: "You can request a feedback summary from the judging panel after the event."
      },
      {
        triggers: ["tie", "equal"],
        question: "How are ties handled in the scoring?",
        answer: "In case of a tie, the score in the 'Technical Complexity' category will be the tie-breaker."
      }
    ]
  },
  {
    category: "Prizes & Benefits",
    questions: [
      {
        triggers: ["prize", "money", "win"],
        question: "What are the prizes for the winners?",
        answer: "1st Prize: ₹50,000, 2nd Prize: ₹30,000, 3rd Prize: ₹20,000."
      },
      {
        triggers: ["category", "ui", "ux", "security"],
        question: "Are there category-specific prizes?",
        answer: "Yes! Best UI/UX, Most Security-Focused, and Best Use of Sponsor API."
      },
      {
        triggers: ["certificate", "participation"],
        question: "Will all participants receive a certificate?",
        answer: "Every participant who submits a project will receive a Certificate of Participation."
      },
      {
        triggers: ["goodie", "swag", "t-shirt", "bag"],
        question: "Are there any goodies or 'swag' bags for attendees?",
        answer: "Yes! T-shirts, stickers, notebooks, and more for all participants."
      },
      {
        triggers: ["internship", "job", "career"],
        question: "Are there internship or job opportunities through the hackathon?",
        answer: "Several sponsors are recruiting interns directly from the pool of participants."
      },
      {
        triggers: ["cash", "voucher"],
        question: "Will winners receive cash prizes or vouchers?",
        answer: "Main prizes are cash; category prizes may include high-value vouchers and gadgets."
      },
      {
        triggers: ["beginner", "freshman"],
        question: "Is there a prize for the best beginner team?",
        answer: "Yes, we have a 'Best Freshman Team' prize to encourage newcomers."
      },
      {
        triggers: ["distribute", "split"],
        question: "How will the prize money be distributed among team members?",
        answer: "Prize money is transferred to the team lead's account for distribution."
      },
      {
        triggers: ["sponsor", "extra"],
        question: "Are there sponsor-specific challenges and prizes?",
        answer: "Look out for the 'Sponsor' tab for extra prize opportunities!"
      },
      {
        triggers: ["people", "vote"],
        question: "Will there be a 'People's Choice' award?",
        answer: "Yes! All participants will vote for their favorite project on Sunday afternoon."
      }
    ]
  },
  {
    category: "Logistics",
    questions: [
      {
        triggers: ["food", "meal", "drink", "eat"],
        question: "Will food and drinks be provided during the event?",
        answer: "We provide 6 meals (Breakfast, Lunch, Dinner) plus midnight snacks and coffee!"
      },
      {
        triggers: ["diet", "veg", "vegan"],
        question: "Are there vegetarian/vegan/special diet options?",
        answer: "We offer Vegetarian and Non-Vegetarian options. Please mention allergies in the registration form."
      },
      {
        triggers: ["travel", "reimburse", "bus", "train"],
        question: "Is travel reimbursement available?",
        answer: "We do not provide travel reimbursement, but we can help book local transport at discounted rates."
      },
      {
        triggers: ["accommodation", "stay", "sleep", "hostel"],
        question: "Will accommodation be provided for overnight stays?",
        answer: "On-campus accommodation (hostels) is provided for the duration of the event."
      },
      {
        triggers: ["park", "car", "bike"],
        question: "Where can I park my vehicle at the venue?",
        answer: "Ample parking is available at the MITS campus for participants."
      },
      {
        triggers: ["rest", "nap", "quiet"],
        question: "Is there a resting area or quiet zone?",
        answer: "Yes, designated quiet zones and bed-spaces are available for when you need a nap."
      },
      {
        triggers: ["bring", "necessity"],
        question: "What should I bring with me to the venue?",
        answer: "Laptop, charger, toiletries, a warm jacket (it gets cold), and your college ID."
      },
      {
        triggers: ["smoke", "area"],
        question: "Is there a smoking area at the venue?",
        answer: "The MITS campus is a smoke-free zone. Smoking is strictly prohibited."
      },
      {
        triggers: ["charge", "outlet", "plug"],
        question: "Are there charging stations for devices?",
        answer: "Every team table will have multiple power outlets."
      },
      {
        triggers: ["dress", "wear"],
        question: "What is the dress code for the event?",
        answer: "Comfortable casuals. Hackathon T-shirts will be provided and are encouraged!"
      }
    ]
  },
  {
    category: "Mentorship & Workshops",
    questions: [
      {
        triggers: ["mentor", "help", "guide"],
        question: "Will there be mentors available to help us?",
        answer: "Yes, over 20 mentors from industry and academia will be present on the floor."
      },
      {
        triggers: ["contact", "call", "reach"],
        question: "How do we contact a mentor during the hackathon?",
        answer: "Use the Discord 'mentors-help' channel or wave a flag at your table!"
      },
      {
        triggers: ["workshop", "talk", "session"],
        question: "Are there any workshops scheduled during the event?",
        answer: "We have lightning talks on Git, Blockchain Security, and Pitching on Saturday."
      },
      {
        triggers: ["debug", "error", "fix"],
        question: "Can we ask mentors for help with debugging?",
        answer: "Mentors can guide you through logic and bugs, but they won't write the code for you."
      },
      {
        triggers: ["discord", "slack", "comm", "message"],
        question: "Will there be a Discord or Slack channel for communication?",
        answer: "Our official communication hub is the NXTGENSEC Discord server."
      },
      {
        triggers: ["office hours", "expert"],
        question: "Are there 'Office Hours' for specific technical experts?",
        answer: "Specific experts will have 'Office Hours' on Saturday morning for deep technical dives."
      },
      {
        triggers: ["pitch help", "present"],
        question: "Can mentors help us with our pitch?",
        answer: "Yes, we have pitching workshops and mentors to help refine your presentation."
      },
      {
        triggers: ["limit", "too much"],
        question: "Is there a limit on how much help we can get from mentors?",
        answer: "No limit! Use the mentors as much as you need—they are there to help you succeed."
      },
      {
        triggers: ["network", "industry", "meet"],
        question: "Will there be networking sessions with industry leaders?",
        answer: "Saturday night dinner is a dedicated networking session with judges and sponsors."
      },
      {
        triggers: ["be a mentor", "apply mentor"],
        question: "Can I become a mentor if I have experience?",
        answer: "If you're an industry professional, email us with your LinkedIn profile to apply!"
      }
    ]
  },
  {
    category: "Rules & Code of Conduct",
    questions: [
      {
        triggers: ["conduct", "code", "rule", "policy"],
        question: "What is the Code of Conduct for the event?",
        answer: "We follow the MLH Code of Conduct to ensure a safe and inclusive environment for everyone."
      },
      {
        triggers: ["violate", "break", "happen"],
        question: "What happens if someone violates the rules?",
        answer: "Any form of harassment or cheating will lead to immediate disqualification and removal."
      },
      {
        triggers: ["open source", "source", "borrow"],
        question: "Can we use open-source code in our project?",
        answer: "Yes, you can use open-source projects, but you must credit them in your README."
      },
      {
        triggers: ["api", "paid", "subscribe"],
        question: "Are we allowed to use APIs that require a subscription?",
        answer: "You can use them, but we recommend sticking to free tiers or sponsor-provided credits."
      },
      {
        triggers: ["plagiarism", "copy", "cheat"],
        question: "What is the policy on plagiarism?",
        answer: "Presenting others' work as your own will lead to immediate disqualification."
      },
      {
        triggers: ["disqualify", "kick"],
        question: "Can a team be disqualified?",
        answer: "Breaking rules, pre-coding, or offensive behavior are grounds for disqualification."
      },
      {
        triggers: ["harass", "safe", "secure"],
        question: "Is there a harassment policy?",
        answer: "We have a zero-tolerance policy. Report issues to the organizers or the security desk."
      },
      {
        triggers: ["emergency", "hurt", "hospital"],
        question: "Who should I contact for emergencies at the venue?",
        answer: "Call the emergency number on your ID badge or find any organizer in a yellow T-shirt."
      },
      {
        triggers: ["photo", "video", "camera"],
        question: "Can we take photos or videos during the event?",
        answer: "Yes! Tag us @NXTGENSEC on social media."
      },
      {
        triggers: ["terms", "condition", "t&c"],
        question: "Where can I find the full terms and conditions?",
        answer: "The full T&C can be found in the footer link of our website."
      }
    ]
  }
];
