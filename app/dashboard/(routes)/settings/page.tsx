import React from "react";

import ProfileForm from "@/lib/settings/components/profile-form";
import { UserProfile } from "@clerk/nextjs";

const SettingsPage = () => {
  return (
    <main className="sm:container !max-w-4xl" id="settings-page">
      <h1 className="text-xl md:text-4xl font-medium mb-6">Settings</h1>
      {/* <ProfileForm /> */}
      <UserProfile />
    </main>
  );
};

export default SettingsPage;
