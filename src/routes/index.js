import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import SignupPage from "../pages/Signuppage";
import LoginPage from "../pages/loginpage";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/create-user" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path = "/" element={Dashboard} />
            {/* <Route path="/" element={<Searchpage />} />
            <Route path="/search-jobs" element={<Searchpage />} />
            <Route path="/resetPassword" element={<Resetpassword />} />
            <Route path='/my-profile' element={<Myprofile />} />
            <Route path='/referred-jobs' element={<RefferdJobs/>} />
            <Route path='/saved-jobs' element={<SavedJobs />} />
            <Route path='/jobs-applied' element={<JobsApplied />} />
            <Route path='/document-repository' element={<DocumentoryRepo/>} />
            <Route path='/profile' element={<Profile />} />      
            <Route path='/job-details' element={<Job_Details />} />       */}
        </Routes>
    )
}