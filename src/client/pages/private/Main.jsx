import React, { Component } from "react"
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import PostCard from "components/postCard";
import Grid from "@material-ui/core/Grid";

class Main extends Component {
  grid = {
    spacing: 2
  }
  new = [1,2,3,4,5];
  render(){
      return(
            <Container component="main" maxWidth="xl">
              <CssBaseline/>
              <div> 신간 여행기 </div>
              <hr/>
                <Grid container spacing={this.grid.spacing}>
                  {this.new.map((value) => {
                    return(
                      <Grid item key={value} >
                        <PostCard/>
                      </Grid>
                    )
                  })}
                </Grid>
              <div> 베스트 여행기 </div>
              <hr/>
                <Grid container spacing={this.grid.spacing}>
                  {this.new.map((value) => {
                    return(
                      <Grid item key={value} >
                        <PostCard/>
                      </Grid>
                    )
                  })}
                </Grid>
            </Container>
      )
  }
}
export default Main;