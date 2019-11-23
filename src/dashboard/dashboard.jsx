import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';
import { getDashboard } from './dashboardActions';

class Dashboard extends Component {

    componentWillMount() {
        this.props.getDashboard();
    }

    render() {
        const { categories, subcategories, wikis } = this.props.summary;
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'/>
                <Content>
                    <Row>
                        <ValueBox 
                        cols='12 4' 
                        color='green' 
                        icon='list-ol'
                        value={categories}
                        text='Total de categorias'/>

                        <ValueBox 
                        cols='12 4' 
                        color='red' 
                        icon='list-ul'
                        value={subcategories}
                        text='Total de subcategorias'/>

                        <ValueBox 
                        cols='12 4' 
                        color='blue' 
                        icon='align-left'
                        value={wikis}
                        text='Total de wikis'/>
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary});
const mapDispatchToProps = dispatch => bindActionCreators({ getDashboard }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
