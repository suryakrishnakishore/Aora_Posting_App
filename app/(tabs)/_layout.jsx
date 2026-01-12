import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '../../constants';

const TabsLayout = () => {
    const TabIcon = ({ color, icon, name, focused }) => {
        return (
            <View className='items-center justify-center gap-2'>
                <Image
                    source={icon}
                    resizeMode='contain'
                    tintColor={color}
                    className='w-6 h-6'
                />
                <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>
                    {name}
                </Text>
            </View>

        )
    }
    return (
        <View>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "#FFA001",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: "#161622",
                        borderTopWidth: 1,
                        borderTopColor: "#232533",
                        height: 84,
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: (({ color, focused }) => (
                            <TabIcon
                                color={color}
                                icon={icons.home}
                                name="Home"
                                focused={focused}
                            />
                        ))
                    }}
                />
                <Tabs.Screen
                    name="bookmark"
                    options={{
                        title: "Bookmark",
                        headerShown: false,
                        tabBarIcon: (({ color, focused }) => (
                            <TabIcon
                                color={color}
                                icon={icons.bookmark}
                                name="Bookmark"
                                focused={focused}
                            />
                        ))
                    }}
                />
                <Tabs.Screen
                    name="create"
                    options={{
                        title: "Create",
                        headerShown: false,
                        tabBarIcon: (({ color, focused }) => (
                            <TabIcon
                                color={color}
                                icon={icons.plus}
                                name="Create"
                                focused={focused}
                            />
                        ))
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: (({ color, focused }) => (
                            <TabIcon
                                color={color}
                                icon={icons.profile}
                                name="Profile"
                                focused={focused}
                            />
                        ))
                    }}
                />
            </Tabs>
        </View>
    )
}

export default TabsLayout