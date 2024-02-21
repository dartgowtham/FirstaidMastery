import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import pp from '../../assets/post.jpg'
import Icon from 'react-native-vector-icons/FontAwesome'




const Post = ({ username, imageUrl, caption, likes, onPressLike }) => {
  return (
    <TouchableOpacity onp={onPressLike}>

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={pp} style={styles.image} />
      <View style={styles.footer}>
        <Icon name='heart' size={20} style={{color:onPressLike?'red':'black'}}><Text style={styles.likeText}> {likes}</Text></Icon>
        <Text style={styles.caption}>{caption}</Text>
      </View>
    </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  footer: {
    padding: 10,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    color:'red'
  },
  likeText: {
    marginLeft: 5,
  },
  caption: {
    marginTop: 5,
  },
});

export default Post;
