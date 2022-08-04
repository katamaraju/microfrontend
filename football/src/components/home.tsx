import { Col, Row, Divider } from 'antd';
import React from 'react';
import FootballGird from './football-grid/FootballGrid';
import Search from './search/Search';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import Axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { TimeZoneService } from './helpers/TimeZoneService';
import { Fixture } from '../types/Fixture';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

class Home extends React.Component{

    state = {
        userData: {},
        footBallFixtures: []
    }

    componentDidMount() {
        this.setState({userData: sessionStorage.getItem('oidc.user:https://identity.dev.env.works/identity/:webtc')});
    }
    
    handleSearch = (): void => {        
        console.log('Search Clicked');
        const currentDate = new Date();
        let fromDate;
        let toDate = currentDate;
        const timeZoneService = new TimeZoneService();
            fromDate = currentDate.setHours(0, 0, 0);
            toDate.setHours(23, 59, 59);
            const fromDateTime = timeZoneService.getrequestDateByTimeZone(
            new Date(fromDate)
            );
            const toDateTime = timeZoneService.getrequestDateByTimeZone(
            new Date(toDate)
            );
        Axios.post<any, AxiosResponse<any>, any>(
            `http://localhost:55959/api/SearchFixture/DetailedSearch`,
            {
                fetchNextPage: true,
                fromDateTime: fromDateTime,
                selectedRegionIds: [],
                selectedSportIds: [4],
                sortColumn: "fixtureName",
                sortorder: "desc",
                startIndex: 0
            },
            {
                headers: {
                    'Authorization': `${this.state.userData['token_type']} ${this.state.userData['access_token']}`,
                    'Content-Type': 'application/json',
                    'X-On-Behalf-Of': `react web trading client`,
                    'X-Correlation-Id': `correlation-id`
                }
                
            }
          )
            .then(response => {
                console.log('response', response);
                console.log('response.data.response.fixtures', response.data.response.fixtures);
                this.setState({ footBallFixtures : response.data.response.fixtures })
                return response;
            })
            .catch(error => {
              console.log('error', error);
                throw error;
              
            });
    }

    render() {
        return (
            <>
                <Search onClickSearch={this.handleSearch} />
                <FootballGird footBallFixtures={this.state.footBallFixtures} />
            </>
        )
    }
};

export default Home;