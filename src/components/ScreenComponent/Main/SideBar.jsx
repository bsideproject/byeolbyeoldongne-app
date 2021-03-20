import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SimpleModal from '../../Modal';
import Modal from 'react-native-modal';
import theme from '../../../context/theme';

const SideBar = ({ navigation, isVisible, handleClose, ...props }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    console.log(isVisible);
    return (
        <Modal
            isVisible={isVisible}
            handleClose={handleClose}
            backdropColor="black"
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
            onBackdropPress={handleClose}
            backdropOpacity={0.3}
            {...props}
        >
            <View style={styles.innerModal}>
                <View style={styles.sideBar}>
                    <View style={styles.profile}>
                        <View style={styles.profileName}>
                            <Text style={styles.profileText}>별별동네</Text>
                            <Image
                                source={require('../../../static/images/icons/arrow_right_opacity.png')}
                            />
                        </View>
                        <View style={styles.profileEmail}>
                            <Image
                                style={styles.smallIcon}
                                source={require('../../../static/images/icons/google_profile.png')}
                            />
                            <Text style={styles.profileEmailText}>
                                bb.dongne@gmail.com
                            </Text>
                        </View>
                    </View>
                    <View style={styles.notifications}>
                        <Image
                            style={styles.mediumIcon}
                            source={require('../../../static/images/icons/icon_bell.png')}
                        />
                        <Image
                            style={styles.mediumIcon}
                            source={require('../../../static/images/icons/settings.png')}
                        />
                    </View>
                    <View style={styles.menus}>
                        <TouchableOpacity>
                            <View style={styles.menu}>
                                <Image
                                    style={styles.menuIcon}
                                    source={require('../../../static/images/icons/love.png')}
                                />
                                <Text style={styles.menuText}>
                                    나의 관심 동네
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.menu}>
                                <Image
                                    style={styles.menuIcon}
                                    source={require('../../../static/images/icons/icon_message.png')}
                                />
                                <Text style={styles.menuText}>
                                    내가 작성한 후기
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.menu}>
                                <Image
                                    style={styles.menuIcon}
                                    source={require('../../../static/images/icons/icon_write.png')}
                                />
                                <Text style={styles.menuText}>
                                    내가 작성한 댓글
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*<View style={styles.background} />*/}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    innerModal: {
        display: 'flex',
        flexDirection: 'row',
        width: '70%',
        height: '100%',

        position: 'absolute',
        left: -20,
    },
    sideBar: {
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        height: '100%',
        backgroundColor: theme.color.background,

        position: 'relative',
    },
    background: {
        flex: 1,
        backgroundColor: '#000000',
    },
    profile: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingBottom: 23,

        borderBottomWidth: 1,
        borderBottomColor: theme.color.lightBorder,
    },
    profileName: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    profileEmail: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileEmailText: {
        color: theme.font.light,
        fontSize: theme.font.size.normal,
        lineHeight: 16,
    },
    profileText: {
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 29,
        marginRight: 12,
    },
    smallIcon: {
        width: 9,
        height: 9,
        marginRight: 5,
    },
    mediumIcon: {
        width: 15,
        height: 15,
        marginLeft: 5,
    },
    menuIcon: {
        width: 15,
        height: 15,
        marginRight: 10,
    },
    notifications: {
        position: 'absolute',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        right: 20,
        top: 26,
    },
    menus: {
        paddingLeft: 20,
        paddingTop: 20,
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        marginBottom: 16,
    },
    menuText: {
        fontSize: 16,
        lineHeight: 26,
    },
});

export default SideBar;
