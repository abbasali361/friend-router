import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState([]);
    useEffect( () => {
        const url =`https://jsonplaceholder.typicode.com/users${friendId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setFriend(data));
    },[])
    return (
        <div>
            <p>This is Friend: {friendId}</p>
            <h3>{friend.length}</h3>
            <p>email: {friend.name}</p>
            <p>phone: {friend.phone}</p>
            <p>website: {friend.website}</p>

        </div>
    );
};

export default FriendDetail;