
import React, { useState, Component, useCallback } from 'react';

import {
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  Picker,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Alert,
  ActionSheetIOS,
  Linking,
  ImageBackground,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker';
import { Card } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


function Player1() {
  return (

    <ScrollView>
  <View style={styles.container}>

    <ImageBackground
      style={{ width: 355, height: 180,}}
      source={{ uri: 'https://www.foxsports.com.tw/uploads/sites/3/2020/05/94638058_2959611374076826_3732546989355696128_o-1-e1589707160783.jpg' }}
    >

    <View>
        <View style={{ marginLeft: 10, marginTop: 70}}>
          <Image
          style={{ width: 70, height: 100, borderColor: '#fff', borderWidth: 3}}
          source={{ uri: 'http://cpbl-elta.cdn.hinet.net/upload/head/R407.jpg'}}/>
      </View>
    </View>

    <View >
      <View style={{marginLeft: 70, marginTop: -20}}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold', marginLeft: 15,}}>林智平 #79</Text>
      </View>
    </View>
    </ImageBackground>

  <View style={{ backgroundColor: '#000',  marginTop: 10}}>
      <Text style={{color: '#fff', marginTop: 5, marginBottom: 5, textAlign: 'center', fontSize: 18}}>基本資料</Text>
  </View>

    <View style={{ backgroundColor: '#7B7B7B', marginTop: 10}}>
        <Text style={{color: '#fff', marginLeft: 10,  marginTop: 5, marginBottom: 5}}>球隊               位置                投打                   學歷</Text>
    </View>

    <View>
        <Text style={{color: '#000', marginLeft: 10,  marginTop: 5, marginBottom: 5}}>樂天               三壘手            右投右打            文化大學</Text>
    </View>

      <View style={{ backgroundColor: '#7B7B7B'}}>
        <Text style={{color: '#fff', marginLeft: 10,  marginTop: 5, marginBottom: 5}}>身高               體重                生日                   初出場</Text>
    </View>

        <View>
        <Text style={{color: '#000', marginLeft: 10,  marginTop: 5, marginBottom: 5}}>178                  77            1985/03/23         2009/03/29</Text>
    </View>

  <View style={{ backgroundColor: '#000',  marginTop: 10}}>
      <Text style={{color: '#fff', marginTop: 5, marginBottom: 5, textAlign: 'center', fontSize: 18}}>打擊成績</Text>
  </View>

  <View style={{ backgroundColor: '#7B7B7B', marginTop: 10}}>
        <Text style={{color: '#fff', marginLeft: 10,  marginTop: 5, marginBottom: 5}}>YEAR  RBI   R    H   1B  2B  3B  HR   OBP   SLG   AVG</Text>
    </View>

    <View>
        <Text style={{color: '#000', marginLeft: 10,  marginTop: 5, marginBottom: 5}}>2009   30	 49	 87	 76	  6	   4	    1   0.357	0.329	0.275</Text>
    </View>

    <View style={{backgroundColor: '#E0E0E0'}}>
        <Text style={{color: '#000', marginLeft: 10,  marginTop: 5, marginBottom: 5}}>2010   30	 49	 87	 76	  6	   4	    1   0.357	0.329	0.275</Text>
    </View>

        <View>
        <Text style={{color: '#000', marginLeft: 10,  marginTop: 5, marginBottom: 5}}>2011   30	 49	 87	 76	  6	   4	    1   0.357	0.329	0.275</Text>
    </View>

        <View style={{backgroundColor: '#E0E0E0'}}>
        <Text style={{color: '#000', marginLeft: 10,  marginTop: 5, marginBottom: 5}}>2012   30	 49	 87	 76	  6	   4	    1   0.357	0.329	0.275</Text>
    </View>

            <View>
        <Text style={{color: '#000', marginLeft: 10,  marginTop: 5, marginBottom: 5}}>2013   30	 49	 87	 76	  6	   4	    1   0.357	0.329	0.275</Text>
    </View>


  </View>

    </ScrollView>

  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 30, height: 30, marginLeft: 10 }}
      source={{ uri: 'http://cpbl-elta.cdn.hinet.net/web/images/logo.png' }}
    />
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  const state = { date: '23-06-2020' };

  const supportedURL =
    'http://www.cpbl.com.tw/schedule/index/2020-06-23.html?&date=2020-06-23&gameno=01&sfieldsub=&sgameno=01';

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <DatePicker
          style={{ width: 350 }}
          date={state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2000"
          maxDate="01-01-2050"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          // onDateChange={(date) => {
          //   setState({ date: date });
          // }}
        />
      </View>

      <ScrollView style={cardstyles.container}>
        <Card>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View>
              <Image
                source={{
                  uri:
                    'data:image/png;base64,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',
                }}
                style={{
                  width: 75,
                  height: 75,
                  marginLeft: 25,
                  marginTop: 20,
                }}
              />
              <View>
                <Text
                  style={{
                    marginLeft: 35,
                    marginBottom: 20,
                  }}>
                  17W-22L
                </Text>
              </View>
            </View>

            <View style={cardstyles.centertext}>
              <Text
                style={{
                  marginLeft: 50,
                  marginBottom: 20,
                }}>
                16:35{'\n'}
                G102 桃園
              </Text>
            </View>

            <View>
              <Image
                source={{
                  uri:
                    'data:image/jpeg;base64,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',
                }}
                style={{
                  width: 75,
                  height: 75,
                  marginLeft: 55,
                  marginTop: 20,
                }}
              />
              <Text
                style={{
                  marginLeft: 60,
                  marginBottom: 20,
                }}>
                100W-0L
              </Text>
            </View>
          </View>
        </Card>

        <Text style={cardstyles.cardandcard}></Text>

        <Card>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View>
              <Image
                source={{
                  uri:
                    'data:image/jpeg;base64,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',
                }}
                style={{
                  width: 75,
                  height: 75,
                  marginLeft: 25,
                  marginTop: 20,
                }}
              />
              <View>
                <Text
                  style={{
                    marginLeft: 35,
                    marginBottom: 20,
                  }}>
                  18W-26L
                </Text>
              </View>
            </View>

            <View style={cardstyles.centertext}>
              <Text
                style={{
                  marginLeft: 50,
                  marginBottom: 20,
                }}>
                16:35{'\n'}
                G103 洲際
              </Text>
            </View>

            <View>
              <Image
                source={{
                  uri:
                    'data:image/jpeg;base64,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',
                }}
                style={{
                  width: 75,
                  height: 75,
                  marginLeft: 55,
                  marginTop: 20,
                }}
              />
              <Text
                style={{
                  marginLeft: 60,
                  marginBottom: 20,
                }}>
                30W-17L
              </Text>
            </View>
          </View>
        </Card>
      </ScrollView>

      <OpenURLButton url={supportedURL}>完整賽程</OpenURLButton>
    </View>
  );
}

const Setting_Tab = createMaterialTopTabNavigator();

function SettingsScreen({ navigation }) {

  return (

    <ScrollView>
    <View>

            <View style={{backgroundColor: '#000', marginTop: 10}}>
        <Text style={{ color: '#fff', backgroundColor: '#000',  marginTop: 10, marginBottom: 10,  textAlign: 'center',}}>
          {' '}
           一軍上半季戰績
        </Text>
        </View>

      <View style={{marginTop: 10, marginBottom: 10,}}>
        <Text style={{ color: '#fff', backgroundColor: '#7B7B7B' }}>
          {' '}
           RKS             TEAM           W         T          L        PCT      GB
        </Text>

        </View>

        <View style={{marginTop: 3, marginBottom: 3}}>
        <Text>   1              樂天桃猿       100        0          0       1.000      0{'\n'}</Text>
        </View>        
        <View style={{marginTop: 3, marginBottom: 3}}>
        <Text>   2              中信兄弟        25        0         18       0.581      0{'\n'}</Text>
        </View>
                <View style={{marginTop: 3, marginBottom: 3}}>
        <Text>   3              富邦悍將        17        0         23       0.425    6.5{'\n'}</Text>
        </View>
                        <View style={{marginTop: 3, marginBottom: 3}}>
        <Text>   4              統一7-11        19        0         26       0.420     7{'\n'}</Text>
        </View>
    </View>

        <View>

            <View style={{backgroundColor: '#000', marginTop: 10}}>
        <Text style={{ color: '#fff', backgroundColor: '#000',  marginTop: 10, marginBottom: 10,  textAlign: 'center',}}>
          {' '}
           一軍下半季戰績
        </Text>
        </View>

      <View style={{marginTop: 10, marginBottom: 10,}}>
        <Text style={{ color: '#fff', backgroundColor: '#7B7B7B' }}>
          {' '}
           RKS             TEAM           W         T          L        PCT      GB
        </Text>

        </View>

        <View style={{marginTop: 3, marginBottom: 3}}>
        <Text style={{textAlign: 'center'}}>   無資料{'\n'}</Text>
        </View>        
        <View style={{marginTop: 3, marginBottom: 3}}>
        <Text style={{textAlign: 'center'}}>   無資料{'\n'}</Text>
        </View >
                <View style={{marginTop: 3, marginBottom: 3}}>
        <Text style={{textAlign: 'center'}}>   無資料{'\n'}</Text>
        </View>
                        <View style={{marginTop: 3, marginBottom: 3}}>
        <Text style={{textAlign: 'center'}}>   無資料{'\n'}</Text>
        </View>
    </View>

        <View>

            <View style={{backgroundColor: '#000', marginTop: 10}}>
        <Text style={{ color: '#fff', backgroundColor: '#000',  marginTop: 10, marginBottom: 10,  textAlign: 'center',}}>
          {' '}
           一軍全年度戰績
        </Text>
        </View>

      <View style={{marginTop: 10, marginBottom: 10,}}>
        <Text style={{ color: '#fff', backgroundColor: '#7B7B7B' }}>
          {' '}
           RKS             TEAM           W         T          L        PCT      GB
        </Text>

        </View>

        <View style={{marginTop: 3, marginBottom: 3}}>
        <Text>   1              樂天桃猿       100        0          0       1.000      0{'\n'}</Text>
        </View>        
        <View style={{marginTop: 3, marginBottom: 3}}>
        <Text>   2              中信兄弟        25        0         18       0.581      0{'\n'}</Text>
        </View>
                <View style={{marginTop: 3, marginBottom: 3}}>
        <Text>   3              富邦悍將        17        0         23       0.425    6.5{'\n'}</Text>
        </View>
                        <View style={{marginTop: 3, marginBottom: 3}}>
        <Text>   4              統一7-11        19        0         26       0.420     7{'\n'}</Text>
        </View>
    </View>

        <View>

            <View style={{backgroundColor: '#000', marginTop: 10}}>
        <Text style={{ color: '#fff', backgroundColor: '#000',  marginTop: 10, marginBottom: 10,  textAlign: 'center',}}>
          {' '}
           二軍全年度戰績
        </Text>
        </View>

      <View style={{marginTop: 10, marginBottom: 10,}}>
        <Text style={{ color: '#fff', backgroundColor: '#7B7B7B' }}>
          {' '}
           RKS             TEAM           W         T          L        PCT      GB
        </Text>

        </View>

        <View style={{marginTop: 3, marginBottom: 3}}>
        <Text>   1              樂天二軍       100        0          0       1.000      0{'\n'}</Text>
        </View>        
        <View style={{marginTop: 3, marginBottom: 3}}>
        <Text>   2              中信二軍        50        0         18       0.777      0{'\n'}</Text>
        </View>
                <View style={{marginTop: 3, marginBottom: 3}}>
        <Text>   3              富邦二軍        17        0         23       0.425    6.5{'\n'}</Text>
        </View>
                        <View style={{marginTop: 3, marginBottom: 3}}>
        <Text>   4              統一二軍        19        0         26       0.420     7{'\n'}</Text>
        </View>
                                <View style={{marginTop: 3, marginBottom: 3}}>
        <Text>   5              味全二軍        10        0         36       0.111      17{'\n'}</Text>
        </View>
    </View>

        </ScrollView>

  );
}

function StaticsScreen({ navigation }) {
  const player_statics = [
    {
      id: '1',
      name: '林智平',
      team: '樂天',
      avg: '0.438',
      image: { uri: 'http://cpbl-elta.cdn.hinet.net/upload/head/R407.jpg' },
    },
    {
      id: '2',
      name: '林立    ',
      team: '樂天',
      avg: '0.405',
      image: { uri: 'http://cpbl-elta.cdn.hinet.net/upload/head/k441.jpg' },
    },
    {
      id: '3',
      name: '陳傑憲',
      team: '統一',
      avg: '0.385',
      image: { uri: 'http://cpbl-elta.cdn.hinet.net/upload/head/H929.jpg' },
    },
    {
      id: '4',
      name: '江坤宇',
      team: '兄弟',
      avg: '0.370',
      image: { uri: 'http://cpbl-elta.cdn.hinet.net/upload/head/004636.jpg' },
    },
    {
      id: '5',
      name: '陳鏞基',
      team: '統一',
      avg: '0.361',
      image: { uri: 'http://cpbl-elta.cdn.hinet.net/upload/head/L0K0.jpg' },
    },
    {
      id: '6',
      name: '朱育賢',
      team: '樂天',
      avg: '0.358',
      image: { uri: 'http://cpbl-elta.cdn.hinet.net/upload/head/H435.jpg' },
    },
  ];
  const [result, setResult] = useState('🔮');

  const own_onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          'Cancel',
          'AVG 打擊率',
          'H 安打數',
          'HR 全壘打數',
          'RBI 打點',
          'SB 盜壘成功',
        ],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResult(Math.floor(Math.random() * 100) + 1);
        } else if (buttonIndex === 2) {
          setResult('🔮');
        }
      }
    );

  return (
    <View>
      <View style={{ marginTop: 10, marginBottom: 10,  backgroundColor: '#E0E0E0' }}>
        <Button onPress={own_onPress} title="打者成績統計 ∨" />
      </View>

      <View>
        <Text style={{ color: '#fff', backgroundColor: '#7B7B7B' }}>
          {' '}
           NUMBER                         NAME         TEAM       AVG
        </Text>
      </View>

      <ScrollView style={{ marginTop: 10 }}>
        <FlatList
          data={player_statics}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#FFFFFF',
                  padding: 3,
                }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View
                    style={{
                      marginLeft: 30,
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>{item.id}</Text>
                  </View>

                  <View>
                    <Image
                      source={item.image}
                      style={{ width: 50, height: 70, marginLeft: 30 }}></Image>
                  </View>
                  <View
                    style={{
                      marginLeft: 30,
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                      {item.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginLeft: 30,
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>{item.team}</Text>
                  </View>
                  <View
                    style={{
                      marginLeft: 30,
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>{item.avg}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FF0000',
        },
        headerTintColor: '#fff',
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'CPBL',
          headerLeft: (props) => <LogoTitle {...props} />,
        }}
      />

      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FF0000',
        },
        headerTintColor: '#fff',
      }}>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: '排名' }}
      />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const StaticsStack = createStackNavigator();

function StaticsStackScreen() {
  return (
    <StaticsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FF0000',
        },
        headerTintColor: '#fff',
      }}>
      <StaticsStack.Screen
        name="Statics"
        component={StaticsScreen}
        options={{ title: '統計' }}
      />

      <StaticsStack.Screen name="Details" component={Player1} />
    </StaticsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === '賽事') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === '排名') {
              iconName = focused ? 'ios-stats' : 'ios-stats';
            } else if (route.name === '統計') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        >
        <Tab.Screen name="賽事" component={HomeStackScreen} />
        <Tab.Screen name="排名" component={SettingsStackScreen} />
        <Tab.Screen name="統計" component={StaticsStackScreen} />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    padding: 10,
  },
});

const cardstyles = StyleSheet.create({
  container: {
    marginTop: 5,
  },

  cardandcard: {
    margin: 5,
  },
  centertext: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
