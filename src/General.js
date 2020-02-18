import React, { Component } from 'react';
import './General.css';

class General extends Component {
    static defaultProps = {
        general: {
            food: 
            <div className='Description'>
                <div>
                    <h5 className='Description-title'>General</h5>
                    <ul>
                        <li>1 serving of wet food per day.</li>
                        <li>You can use the colorful baby spoons to serve the wet food.</li>
                        <li>Please rinse wet food bowls after they're done eating, otherwise the wet food gets crusty.</li>
                        <li>Please keep kibble bowls filled (bowls in front of patio door and next to bathroom sink).</li>
                        <li>There is more kibble in the hallway closet if the jars run out.</li>
                    </ul>
                </div>
                <div>
                    <h5 className='Description-title'>Luna</h5>
                    <ul className='Description-detail'>
                        <li>Blue bowl</li>
                        <li>Gets ~5 spoonfulls of the morsel wet food (Wellness brand yellow and green or yellow and blue can)</li>
                    </ul>
                </div>
                <div>
                    <h5 className='Description-title'>Gunchan</h5>
                    <ul className='Description-detail'>
                        <li>White mason bowl</li>
                        <li>Half a can of pate (Wellness brand yellow and pink can)</li>
                    </ul>
                </div>
                <div>
                    <h5 className='Description-title'>Reggie</h5>
                    <ul className='Description-detail'>
                        <li>White square bowl</li>
                        <li>Half a can of pate (Wellness brand yellow and pink can)</li>
                    </ul>
                </div>
            </div>
            ,
            water: 
            <div className='Description'>
                <div>
                    There are three water bowls:
                    <ul>
                        <li>window sill</li>
                        <li>coffee table</li>
                        <li>next to patio door</li>
                    </ul>
                </div>
                <div>If they seem to run out of water quickly, feel free to use any other random bowl as a water bowl.</div>
            </div>
            ,
            toilet: 
            <div className='Description'>
                <p>Please clean at every visit.</p>
                <p>There is a scoop inside the wicker basket and another one next to the smaller litter box.</p>
                <p>There are small green bags under the kitchen sink you can use.</p>
            </div>
            ,
            other: 
            <div className='Description'>
                Reggie and Luna occasionally get curious and try to leave out the front door.
            </div>
        }
    }
    render() {
        const titles = Object.keys(this.props.general);
        return(
            <div className="row General">
                <div className="col-4">
                    <div className="list-group" id="list-tab" role="tablist">
                        {titles.map(title => (
                            <a className="list-group-item list-group-item-action General-title" id={`list-${title}-list`} data-toggle="list" href={`#list-${title}`} role="tab" aria-controls={title} key={title}>{title}</a>
                        ))}
                    </div>
                </div>
                <div className="col-8">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade General-detail" id="list-food" role="tabpanel" aria-labelledby="list-food-list">{this.props.general.food}</div>
                        <div className="tab-pane fade General-detail" id="list-water" role="tabpanel" aria-labelledby="list-water-list">{this.props.general.water}</div>
                        <div className="tab-pane fade General-detail" id="list-toilet" role="tabpanel" aria-labelledby="list-toilet-list">{this.props.general.toilet}</div>
                        <div className="tab-pane fade General-detail" id="list-other" role="tabpanel" aria-labelledby="list-other-list">{this.props.general.other}</div>
                    </div>
                </div>
            </div>            
        )
    }
}

export default General;