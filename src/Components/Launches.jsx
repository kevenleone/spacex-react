import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import LaunchItem from './LaunchItem';
import Loading from './Loading';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
       launches {
        flight_number,
        mission_name,
        details,
        launch_date_local,
        launch_success,
        rocket {
            rocket_id
            rocket_name
            rocket_type
        },
        details,
        links {
            mission_patch
            mission_patch_small
        }
       }
    }    
`

export default class Launches extends Component {
    state = {
        launch: [{
            flight_number: 1,
            name: 'Falcon 9'
        }]
    }

  render() {
  
    return (
      <Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <Loading />
            if (error) console.log(error);
            
          return (
              <Fragment>
                {data.launches.map(launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} detailed={true}/>
                ))}
              </Fragment>
            );
            }
          }
        </Query>
      </Fragment>
    )
  }
}
