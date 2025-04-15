/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, List, Segment } from 'semantic-ui-react';
import map from 'lodash/map';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { flattenToAppURL, addAppURL } from '@plone/volto/helpers/Url/Url';

const messages = defineMessages({
    copyright: {
        id: 'Copyright',
        defaultMessage: 'Copyright',
    },
});

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => {
    const { siteActions = [] } = useSelector(
        (state) => ({
            siteActions: state.actions?.actions?.site_actions,
        }),
        shallowEqual,
    );

    return (
        <Segment
        role="contentinfo"
        vertical
        padded
        inverted
        color="grey"
        textAlign="center"
        id="footer"
        aria-label="Footer"
        tabIndex="-1"
        >
        <Container>
        <Segment basic inverted color="grey" className="discreet">
        <FormattedMessage
        id="{copyright} {current_year} Departamento de Medicina Veterinária Preventiva e Saúde Animal - FMVZ - USP{br} Av. Prof. Orlando M. de Paiva, 87 - São Paulo - SP - CEP 05508-270 - Brasil"
        defaultMessage="{copyright} {current_year} Departamento de Medicina Veterinária Preventiva e Saúde Animal - FMVZ - USP{br} Av. Prof. Orlando M. de Paiva, 87 - São Paulo - SP - CEP 05508-270 - Brasil"
        values={{
            copyright: (
                <abbr title={intl.formatMessage(messages.copyright)}>©</abbr>
            ),
            current_year: new Date().getFullYear(),
            br: <br />
        }}
        />{' '}
        </Segment>
        <List horizontal inverted>
        {siteActions?.length
            ? map(siteActions, (item) => (
                <div role="listitem" className="item" key={item.id}>
                <UniversalLink
                className="item"
                href={
                    item.url ? flattenToAppURL(item.url) : addAppURL(item.id)
                }
                >
                {item?.title}
                </UniversalLink>
                </div>
            ))
            : null}
            </List>
            </Container>
            </Segment>
    );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
    /**
     * i18n object
     */
};

export default injectIntl(Footer);
