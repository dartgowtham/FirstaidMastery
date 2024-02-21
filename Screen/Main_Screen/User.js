import React,{useState}from 'react';
import { View, FlatList } from 'react-native';
import Post from '../Sub_Screen/Post';
import pp from '../../assets/fire.png'
import { SafeAreaView } from 'react-native-safe-area-context';

const postsData = [
  { id: '1', username: 'user1', imageUrl: {pp}, caption: 'Caption 1', likes: 15 },
  { id: '1', username: 'user1', imageUrl: {pp}, caption: 'Caption 1', likes: 15 },
  { id: '1', username: 'user1', imageUrl: {pp}, caption: 'Caption 1', likes: 15 },
  { id: '1', username: 'user1', imageUrl: {pp}, caption: 'Caption 1', likes: 15 },
  { id: '2', username: 'user2', imageUrl: 'https://example.com/image2.jpg', caption: 'Caption 2', likes: 20 },
  { id: '1', username: 'user1', imageUrl: {pp}, caption: 'Caption 1', likes: 15 },
  { id: '1', username: 'user1', imageUrl: {pp}, caption: 'Caption 1', likes: 15 },
  // Add more posts as needed
];

const User = () => {
  const handleLikePress = (postId) => {
    // Implement your like functionality here
    console.log(`Liked post with id: ${postId}`);
  };
  const [lastPress, setLastPress] = useState(0);

const bb = () => {
  const currentTime = new Date().getTime();
  const delta = currentTime - lastPress;
  setLastPress(currentTime);
  if (delta < 200) {
    console.log('double tap');
  } else {
    console.log('single tap');
  }
};

  return (
    <SafeAreaView>
    <View>
      <FlatList
        data={postsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Post
            username={item.username}
            imageUrl={item.imageUrl}
            caption={item.caption}
            likes={item.likes}
            onPressLike={() => handleLikePress(item.id)}
          />
        )}
      />
    </View>
    </SafeAreaView>
  );
};

export default User;
