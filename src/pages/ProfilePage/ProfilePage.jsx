import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileNav from '../../components/ProfileNav'

const ProfilePage = () => {
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center bg-[#F6F6F6] md:min-h-[80vh]">
      <div className="flex w-full max-w-[1400px] flex-col gap-8 px-6 py-8 md:flex-row md:px-8 lg:px-14 ">
            <ProfileNav />
            <Outlet />
        </div>
    </div>
  )
}

export default ProfilePage