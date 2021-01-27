import React from 'react';
import SideMenu from './components/sideMenu'
import Stream from "./components/streamRender.js";
import IndustryStream from "./components/streamRenderIndustry.js";
import AnalyzeStream from "./components/streamRenderAnalyze.js";
import VisualizeStream from "./components/streamRenderVisualize.js";
import ModelStream from "./components/streamRenderModel.js";
import DeployStream from "./components/streamRenderDeploy.js";
import './App.css'
import { Column, Row} from 'simple-flexbox';
import ToggleButtonExample from './components/nav'

function App2() {
    return (
        <div className="App">
            <Row> 
              <Column ><SideMenu /></Column>
              
              <Column flexGrow={1}>
                    <div style={{backgroundColor:"#242423"}}>
                    <Row>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons" >
                            <ToggleButtonExample />
                        </div>
                    </Row>
                    </div>
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <div class="card-header"><h5 class='text-light'>Industry</h5></div>
                            <Row class><div className='p-3'><IndustryStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <div class="card-header"><h5 class='text-light'>Analyze</h5></div>
                            <Row class><div className='p-3'><AnalyzeStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <div class="card-header"><h5 class='text-light'>Visualize</h5></div>
                            <Row class><div className='p-3'><VisualizeStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row horizontal='space-around'>
                      <Column>
                        <div className="block ">
                            <div class="card-header" ><h5 class='text-light'>Model</h5></div>
                            <Row class><div className='p-3'><ModelStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row>
                      <Column>
                        <div className="block ">
                            <div class="card-header" ><h5 class='text-light'>Deploy</h5></div>
                            <Row class><div className='p-3'><DeployStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    
                 
                </Column>
                
          </Row>
            
            
        
        </div>
     
    );
}

export default App2;
