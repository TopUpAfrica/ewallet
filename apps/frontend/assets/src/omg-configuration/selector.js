import _ from 'lodash'

export const selectConfigurationById = state => configurationId => {
  return state.configurations[configurationId] || {}
}

export const selectBlockchainEnabled = () => state => {
  return state.configurations.blockchain_enabled?.value !== 'boolean'
    ? state.configurations.blockchain_enabled?.value
    : true
}

export const selectConfigurations = state => {
  return state.configurations || {}
}

export const selectConfigurationsByKey = state => {
  return _.keyBy(selectConfigurations(state), 'key')
}

export const selectConfigurationLoadingStatus = state => state.loadingStatus.configurations

export const selectConfigurationUpdateLoadingStatus = state => state.loadingStatus.configurationsUpdate
