import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import SearchFrame from './SearchFrame';
import { FeaturedJobs } from './Featuredjobs';

function HomeScreen({ route }) {
    const { userName, email } = route.params;

  return (
    <View style={styles.container}>
        <View style={styles.homeHeader}>
            <View>
                <Text style={styles.name}> {userName}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
            <View style={styles.homeHeader}>
                <Image style={styles.profileImage} source={require('../assets/profieImage.png')} />
                <View style={styles.active}/>
            </View>
        </View>
        <SearchFrame/>
        <View>
            <View style={styles.titleView}>
                <Text style={styles.title}>Featured Jobs</Text>
                <Text style={styles.more}>See all</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.jobs}>
                <FeaturedJobs 
                    background={require('../assets/cardblue.png')}
                    companyLogo={require('../assets/facebook.png')}
                    jobTitle={'Software Engineer'}
                    company={'Facebook'}
                    pay= {'$180,000'}
                    location={'Accra, Ghana'}
                />
                 <FeaturedJobs 
                    background={require('../assets/cardblueblack.png')}
                    companyLogo={require('../assets/google.png')}
                    jobTitle={'Cloud Engineer'}
                    company={'Google'}
                    pay= {'$260,000'}
                    location={'Kumasi, Ghana'}
                />
                 <FeaturedJobs 
                    background={require('../assets/cardviolet.png')}
                    companyLogo={require('../assets/google.png')}
                    jobTitle={'Database Administrator'}
                    company={'Amazon'}
                    pay= {'$225,000'}
                    location={'Tema, Ghana'}
                />
                 <FeaturedJobs 
                    background={require('../assets/cardwine.png')}
                    companyLogo={require('../assets/google.png')}
                    jobTitle={'DevOps Engineer'}
                    company={'Apple'}
                    pay= {'$250,000'}
                    location={'Accra, Ghana'}
                />
                <FeaturedJobs 
                    background={require('../assets/cardorange.png')}
                    companyLogo={require('../assets/google.png')}
                    jobTitle={'Marketing Manager'}
                    company={'Adis Ababa'}
                    pay= {'$150,000'}
                    location={'Takoradi, Ghana'}
                />
                <FeaturedJobs 
                  background={require('../assets/cardindigo.png')}
                  companyLogo={require('../assets/google.png')}
                  jobTitle={'Software Engineer'}
                  company={'Google'}
                  pay= {'$240,000'}
                  location={'Tema, Ghana'}
              />
                <FeaturedJobs 
                    background={require('../assets/cardgreen.png')}
                    companyLogo={require('../assets/facebook.png')}
                    jobTitle={'Product Manager'}
                    company={'Facebook'}
                    pay= {'$190,000'}
                    location={'Accra, Ghana'}
                />
                <FeaturedJobs 
                  background={require('../assets/cardblack.png')}
                  companyLogo={require('../assets/google.png')}
                  jobTitle={'Software Engineer'}
                  company={'Amazon'}
                  pay= {'$260,000'}
                  location={'Kumasi, Ghana'}
              />
                
            </ScrollView>
        </View>
        <View>
            <View style={styles.titleView}>
                <Text style={styles.title}>Popular Jobs</Text>
                <Text style={styles.more}>See all</Text>
            </View>
            
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFD',
        padding: '20px',
        font: 'poppins'
      },
      homeHeader:{
        display: 'flex',
        flexDirection: 'row',  
        alignItems: 'flex-start', 
        justifyContent: 'space-between',
        marginTop: '20px'
      },
      name: {
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '36px',
        color: '#0D0D26',
      },
      email:{
        color: '#95969D',
        lineHeight: '24px',
        fontSize: '20px',
        fontWeight: '400',
        paddingLeft: '7px'
      }, 
      profileImage: {
        width: '54px',
        height: '54px',
      },
      active: {
        width: '8px',
        height: '8px',
        backgroundColor: '#FC1010',
        borderRadius: '50%',
        position: 'absolute',
        top: '6px',
        left: '40px',
      },
      titleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '10px',
      },
      title: {
        color: '#0D0D26',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '20.8px'
      },
      more: {
        color: '#95969D',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16.8px',
      },
      jobs: {
        color: 'white',
      }


});

export default HomeScreen;
