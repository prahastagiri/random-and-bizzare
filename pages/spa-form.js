import React, { Component } from 'react'

import SPAFORM_LANDING from '@/components/spaform_components/spaform_landingform';

export class SinglePageForm extends Component {
    render() {
        return (
            <div>
                <p>breadcrumbs</p>
                <SPAFORM_LANDING/>
                <p>additions</p>
            </div>
        )
    }
}

export default SinglePageForm;