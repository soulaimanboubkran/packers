import { Loader } from 'lucide-react';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { useUserContext } from '@/context/AuthContext';
import { useSigOutAccount } from '@/lib/react-query/queriesAndMutation';

const LeftSidebar = () => {
  const {user} =useUserContext()
  console.log(user)
  const {mutate:signOut,isSuccess} = useSigOutAccount()
  const navigate = useNavigate();
    useEffect(()=>{
        if(isSuccess) navigate(0)
    },[isSuccess])
  return (
    <nav className="leftsidebar">
    <div className="flex flex-col gap-11">
      <Link to="/" className="flex gap-3 items-center">
        <img
          src="/assets/images/logo.svg"
          alt="logo"
          width={170}
          height={36}
        />
      </Link>

  
        <Link to={`/profile/${user.id}`} className="flex gap-3 items-center">
          <img
            src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
            alt="profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex flex-col">
            <p className="body-bold">{user.name}</p>
            <p className="small-regular text-light-3">@{user.username}</p>
          </div>
        </Link>
 
      <ul className="flex flex-col gap-6">
       
      </ul>
    </div>

    <Button
      variant="ghost"
      className="shad-button_ghost"
      onClick={()=>signOut()}
   >
      <img src="/assets/icons/logout.svg" alt="logout" />
      <p className="small-medium lg:base-medium">Logout</p>
    </Button>
  </nav>
  )
}

export default LeftSidebar
