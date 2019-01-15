import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Loading from './Loading';
import LaunchItem from './LaunchItem'

const LAUNCH_QUERY = gql`
    query launchQuery ($flight_number: Int!) {
        launch (flight_number: $flight_number) {
          flight_number,
          mission_name,
          details,
          launch_date_local,
          launch_success,
          rocket {
              rocket_id
              rocket_name
              rocket_type
              fairings {
                reused
                recovered
                recovery_attempt
                ship,
              }
          },
          details,
          links {
              mission_patch
              mission_patch_small,
              presskit,
              wikipedia,
              video_link,
              reddit_launch,
              article_link
        }
    }
  }
`
export default class Launch extends Component {
  render() {
    let { flight_number} = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
     <Fragment>
        <Query query={LAUNCH_QUERY} variables={{flight_number}}>
          {
            ({loading, error, data}) => {
              if (loading) return <Loading />
              if (error) console.log(error);

              return <LaunchItem launch={data.launch} detailed={false} />
            }
          }
        </Query>
     </Fragment>
    )
  }
}
 