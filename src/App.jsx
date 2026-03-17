import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout & Components
import Layout from '@/components/layout/Layout';
import { AuthProvider } from '@/context/AuthContext';
import ProtectedRoute from '@/components/utils/ProtectedRoute';
import ScrollToTop from '@/components/utils/ScrollToTop';

import Home from '@/pages/Home';
import About from '@/pages/support/About';
import Auth from '@/pages/auth/Auth';
import Dashboard from '@/pages/dashboard/Dashboard';
import TeamFormation from '@/pages/event/TeamFormation';
import ProjectSubmissions from '@/pages/event/ProjectSubmissions';
import JudgingPanel from '@/pages/dashboard/JudgingPanel';
import Leaderboard from '@/pages/event/Leaderboard';
import Community from '@/pages/event/Community';
import Admin from '@/pages/dashboard/Admin';
import RegisteredTeams from '@/pages/event/RegisteredTeams';
import AIProjectIdeas from '@/pages/event/AIProjectIdeas';
import Profile from '@/pages/auth/Profile';
import ProjectGallery from '@/pages/event/ProjectGallery';
import MentorSupport from '@/pages/support/MentorSupport';
import Certificates from '@/pages/event/Certificates';
import PrivacyPolicy from '@/pages/legal/PrivacyPolicy';
import TermsOfService from '@/pages/legal/TermsOfService';
import CodeOfConduct from '@/pages/legal/CodeOfConduct';
import Documentation from '@/pages/support/Documentation';
import Guides from '@/pages/support/Guides';

function App() {
  return (
    <AuthProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/community" element={<Community />} />
            <Route path="/registered-teams" element={<RegisteredTeams />} />
            <Route path="/ai-ideas" element={<AIProjectIdeas />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/gallery" element={<ProjectGallery />} />
            <Route path="/mentors" element={<MentorSupport />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/conduct" element={<CodeOfConduct />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/guides" element={<Guides />} />
            
            {/* Participant Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute allowedRoles={['Participant', 'Organizer']}>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/teams" element={
              <ProtectedRoute allowedRoles={['Participant', 'Organizer']}>
                <TeamFormation />
              </ProtectedRoute>
            } />
            <Route path="/submit" element={
              <ProtectedRoute allowedRoles={['Participant', 'Organizer']}>
                <ProjectSubmissions />
              </ProtectedRoute>
            } />
            
            {/* Judge Routes */}
            <Route path="/judge" element={
              <ProtectedRoute allowedRoles={['Judge', 'Organizer']}>
                <JudgingPanel />
              </ProtectedRoute>
            } />
            
            {/* Admin/Organizer Routes */}
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['Organizer', 'Admin']}>
                <Admin />
              </ProtectedRoute>
            } />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
