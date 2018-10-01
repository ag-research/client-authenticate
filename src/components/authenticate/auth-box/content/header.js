import React from 'react'
import PropTypes from 'prop-types'

import * as afs from '../../../../helpers/auth-form-selector'

export const Header = ({ type }) => {
    document.title = afs.formPageTitle(type);
    return (
        <div className="auth-form-header bg-primary text-center mb-2">
            <p>
                <img alt=" " src="/static/icons/gsdlabs.png" width="35px" height="35px" />
                <span>GSDLABS { afs.formName(type).toUpperCase() }</span>
                <img alt=" " src="/static/icons/gsdlabs.png" width="35px" height="35px" />
            </p>
        </div>
    )
}

Header.propTypes = {
    type: PropTypes.number.isRequired
}

export default Header