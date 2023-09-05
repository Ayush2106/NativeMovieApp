import { View, Text, StyleSheet, TextInput, Button, FlatList, Image } from 'react-native';
import React, { useState } from 'react';

const Movie = () => {
    const [searchText, setSearchText] = useState('');
    const [movieList, setMovieList] = useState();
    // Change text function
    const handleInputChange = (input) => {
        setSearchText(input);
    };

    // Click button
    const handleClick = async () => {
        // console.log(searchText);
        const res = await fetch(`https://www.omdbapi.com/?apikey=b124c475&s=${searchText}`);
        let movieData = await res.json();
        console.log(movieData.Search)
        setMovieList(movieData.Search);
    };

    return (
        <View style={styles.moviediv}>
            <Text>Movie</Text>
            <TextInput
                style={styles.searchinput}
                value={searchText}
                onChangeText={handleInputChange} // Use onChangeText instead of onChange
                placeholder='Search Movie Name'
            />
            <Button onPress={handleClick} title='Search Movie' />
            <View>
                {movieList && <Text style={{fontWeight:'900',fontSize:30,textAlign:'center',padding:8}}>{movieList?.length} : Movies Found</Text>}
                <FlatList
                    data={movieList}
                    renderItem={({ item }) => {
                        return (
                            <View style ={{alignItems:'center'}}>
                                <Image source={{ uri: item.Poster }} style={{ height: 230, width: 300}} />
                                <Text style={{fontWeight:'bold'}}>Movie Name : {item.Title}</Text>
                                <Text>Releasing Year : {item.Year}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    moviediv: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#91BAD6'
    },
    searchinput: {
        marginTop:90,
        width: '75%',
        borderWidth: 1,
        padding: 10,
        borderColor: '#cccccc',
        backgroundColor: '#fff',
    },
   
});

export default Movie;
