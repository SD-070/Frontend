import { useEffect, useState } from 'react';

type UserProfile = {
	name: string;
	age: number;
	email?: string;
};

const Profile = () => {
	const [user, setUser] = useState<UserProfile>({ name: 'Ada', age: 36 });

	useEffect(() => {
		const id = setTimeout(
			() =>
				setUser({
					name: 'Ada Lovelace',
					age: 37,
					email: 'test@mail.com'
					/* Object literal may only specify known properties, and 'email' 
            does not exist in type 'SetStateAction<{ name: string; age: number; }>'. */
				}),
			1000
		);

		return () => clearTimeout(id);
	}, []);

	return (
		<p>
			{user.name} is {user.age} years old
		</p>
	);
};

export default Profile;
