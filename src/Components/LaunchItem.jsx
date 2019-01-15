import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'
export default function LaunchItem(props) {
  console.log(props.launch)

  function TrueOrFalse (verify, isClass = true){
    if(isClass){
      return verify ? 'success' : 'danger'
    } else {
      return verify ? 'Success' : 'False'
    }
  }

  const ItemDetailedResume = () => (
    <div className="card card-body mb-3">
    <div className="row">
        <div className="col-md-9">
        <h5>Mission: {props.launch.mission_name}</h5>
        Date: <Moment format="DD/MM/YYYY - HH:mm">{props.launch.launch_date_local}</Moment> <br /><br />
        Launch Status: <span className={`badge badge-${TrueOrFalse(props.launch.launch_success)}`}>{TrueOrFalse(props.launch.launch_success, false)}</span>
        <br /><br /> <br /><br />
      
      <Link to={`/launch/${props.launch.flight_number}`} className="col-md-7 btn btn-info btn-block">All the Launch & Rocket Info</Link>        
        </div> 
        <div className="col-md-3">
        <img alt={props.launch.links.mission_patch_small} src={props.launch.links.mission_patch_small}></img>
        </div>
    </div>
  </div>
  )

  const ItemDetailed = () => (
    <div style={{marginTop: -50}}>
      <h4><center>Mission: {props.launch.mission_name}</center></h4><br></br>
    <div className="card card-body">
      <div className="row">
        <div className="col-md-3">
        <img alt="logoMission" style={{width: 200}} src={props.launch.links.mission_patch}></img>
        <p style={{marginLeft: 50, marginTop: 10, fontWeight: 'bold'}}> Launch Icon</p>
        </div>
        <div className="col-md-9">
          <p>
            Details: {props.launch.details} <br />
            Date: <Moment format="DD/MM/YYYY - HH:mm">{props.launch.launch_date_local}</Moment> <br /><br />
            Launch Status <span className={`badge badge-${TrueOrFalse(props.launch.launch_success)}`}> {TrueOrFalse(props.launch.launch_success, false)}</span> <br /><br/>
            Is Tentative? <span className={`badge badge-${TrueOrFalse(props.launch.is_tentative)}`}> {TrueOrFalse(props.launch.is_tentative, false)}</span>
          </p>
          <hr />
          <h5>Rocket {props.launch.rocket.rocket_name} / Type: {props.launch.rocket.rocket_type}</h5>
          <p>
          <span className={`badge badge-${TrueOrFalse(props.launch.rocket.reused)}`}> {TrueOrFalse(props.launch.rocket.reused, false)}</span> Reused <br /><br />
          <span className={`badge badge-${TrueOrFalse(props.launch.rocket.recovered)}`}> {TrueOrFalse(props.launch.rocket.recovered, false)}</span> Recovered <br /><br />
          <span className={`badge badge-${TrueOrFalse(props.launch.rocket.recovered_attempt)}`}> {TrueOrFalse(props.launch.rocket.recovered_attempt, false)}</span> Recovery Attempt <br /> <br /> </p>
          <hr />
          <h5>Social Medias</h5>
          {
            props.launch.links.video_link ? <div><SocialIcon label="Facebook" network="youtube" url={props.launch.links.video_link}></SocialIcon> Youtube <br/><br/> </div> : ''
          }
          {
            props.launch.links.reddit_launch ? <div><SocialIcon label="Reddit" network="reddit" url={props.launch.links.reddit_launch}></SocialIcon> Reddit <br/><br/></div> : ''
          }
          {
             props.launch.links.article_link ? <div><SocialIcon label="Article" network="vsco" url={props.launch.links.article_link}></SocialIcon> Article<br/></div> : ''
          }
        </div>
      </div>
    </div>

<br /> <Link className="btn btn-primary" to="/"> <span aria-label="back" role="img">🚀</span>Go Home</Link> <br /><br />
    </div>
  )

console.log(props.detailed, typeof(props.detailed))
  return (
    Boolean(props.detailed) ? <ItemDetailedResume /> : <ItemDetailed />
  )
}
