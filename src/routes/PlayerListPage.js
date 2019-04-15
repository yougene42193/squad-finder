import React, { Component } from 'react';
import ApiService from '../services/api-service';
import { Section } from '../utils/utils';
import PlayerList from '../PlayerList/PlayerList';

export default class PlayListPage extends Component {


    componentDidMount() {
        this.context.clearError()
    }
}