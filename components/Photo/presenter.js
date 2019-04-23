import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Image } from "react-native";
import FadeIn from "react-native-fade-in-image";

const Photo = props => (
    <View>
        <TouchableOpacity>
            <View>
                <FadeIn>
                    <Image 
                        source={
                            props.creator.profile_image
                                ? {
                                    uri: props.creator.profile_image
                                  }
                                : require("../../assets/images/no_image.jpg")
                        }
                        style={{ width: 50, height: 50 }}
                    />
                </FadeIn>
            </View>
            <View>
                <Text>{props.creator.username}</Text>
                {props.location && <Text>{props.location}</Text>}
            </View>
        </TouchableOpacity>
    </View>
);

Photo.propTypes = {
    id: PropTypes.number.isRequired,
    creator: PropTypes.shape({
      profile_image: PropTypes.string,
      username: PropTypes.string.isRequired
    }).isRequired,
    location: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    like_count: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        creator: PropTypes.shape({
          profile_image: PropTypes.string,
          username: PropTypes.string.isRequired
        }).isRequired
      })
    ).isRequired,
  };

export default Photo;