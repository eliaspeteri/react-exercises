import React from 'react';

type Props = {
  profile: {
    first_name: string;
    last_name: string;
    avatar: string;
    phone_number: string;
    date_of_birth: string;
    employment: {
      title: string;
    };
  };
};

const Profile = ({ profile }: Props) => {
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          {profile.avatar ? <img src={profile.avatar} alt='avatar' /> : null}
          <h2>
            {profile.first_name} {profile.last_name}
          </h2>
          <p>{profile.employment.title}</p>
        </div>
        <div className='flip-card-back'>
          <p>
            <b>TEL:</b> {profile.phone_number}
          </p>
          <p>
            <b>DOB:</b> {profile.date_of_birth}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
