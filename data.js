const clubs = [
  {
    id: 'it-society', name: 'IT Society', category: 'IT', logo: 'IT',
    shortDescription: 'For students passionate about software, hardware, and everything in between.',
    description: 'IT Society brings together students who love building things with technology. We run weekly coding sessions, hackathons, and tech talks from industry professionals.',
    committee: [
      { role: 'President', name: 'Nadeesha Perera' },
      { role: 'Vice President', name: 'Kasun Silva' },
      { role: 'Secretary', name: 'Amaya Fernando' }
    ],
    activities: ['Weekly coding sessions', 'Annual Hackathon', 'Guest tech talks', 'Open source contribution nights'],
    upcomingEvents: ['tech-talk-2026']
  },
  {
    id: 'music-club', name: 'Music Club', category: 'Music', logo: 'MU',
    shortDescription: 'Weekly jam sessions, annual concerts, and a home for every kind of musician.',
    description: 'Music Club welcomes singers, instrumentalists, and music lovers of all skill levels. We rehearse weekly and perform at university events throughout the year.',
    committee: [
      { role: 'President', name: 'Ishara Jayasinghe' },
      { role: 'Vice President', name: 'Dulan Wickramasinghe' },
      { role: 'Secretary', name: 'Sithara Rathnayake' }
    ],
    activities: ['Weekly rehearsals', 'Annual concert', 'Open mic nights', 'Inter-university music fest'],
    upcomingEvents: []
  },
  {
    id: 'sports-club', name: 'Sports Club', category: 'Sports', logo: 'SP',
    shortDescription: 'Football, cricket, athletics, and everything competitive.',
    description: 'Sports Club organizes training sessions and tournaments across multiple sports, representing the university in inter-university competitions.',
    committee: [
      { role: 'President', name: 'Tharindu Bandara' },
      { role: 'Vice President', name: 'Chamodi Gunasekara' },
      { role: 'Secretary', name: 'Ravindu Alwis' }
    ],
    activities: ['Weekly training', 'Inter-faculty tournaments', 'Annual sports meet', 'Fitness workshops'],
    upcomingEvents: ['sports-meet-2026']
  },
  {
    id: 'science-club', name: 'Science Club', category: 'Science', logo: 'SC',
    shortDescription: 'Experiments, exhibitions, and curiosity-driven exploration.',
    description: 'Science Club runs hands-on experiments, science exhibitions, and study circles for students who want to go deeper than the classroom syllabus.',
    committee: [
      { role: 'President', name: 'Hiruni Mendis' },
      { role: 'Vice President', name: 'Yohan De Silva' },
      { role: 'Secretary', name: 'Piumi Ranasinghe' }
    ],
    activities: ['Monthly experiments', 'Science exhibition', 'Study circles', 'Guest lectures'],
    upcomingEvents: []
  }
];

const events = [
  { id: 'tech-talk-2026', name: 'Tech Talk 2026', date: 'September 10, 2026', time: '3:00 PM', location: 'Main Auditorium', description: 'An evening of talks from industry professionals on careers in software engineering.', organizingClub: 'IT Society' },
  { id: 'sports-meet-2026', name: 'Annual Sports Meet', date: 'September 20, 2026', time: '9:00 AM', location: 'University Grounds', description: 'A full day of inter-faculty athletics, football, and cricket competitions.', organizingClub: 'Sports Club' },
  { id: 'music-concert-2026', name: 'Annual Music Concert', date: 'October 5, 2026', time: '6:00 PM', location: 'Open Air Theatre', description: "The Music Club's biggest night of the year, featuring performances from every ensemble.", organizingClub: 'Music Club' }
];

const announcements = [
  { id: 1, title: 'IT Society Hackathon Registrations Open', date: 'September 1, 2026', club: 'IT Society', body: 'Registrations for the annual 24-hour hackathon are now open. Teams of up to 4 members can sign up.' },
  { id: 2, title: 'Sports Club Tryouts Next Week', date: 'September 3, 2026', club: 'Sports Club', body: 'Tryouts for the inter-university football and cricket teams will be held next week.' },
  { id: 3, title: 'Music Club Rehearsal Schedule Updated', date: 'August 28, 2026', club: 'Music Club', body: 'Weekly rehearsals have moved to Wednesdays at 5 PM in the Music Room.' }
];

module.exports = { clubs, events, announcements };