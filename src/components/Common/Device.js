const Size = {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
}

const Device = {
    xs: `(min-width: ${Size.xs}) and (max-width: ${Size.sm})`,
    sm: `(min-width: ${Size.sm}) and (max-width: ${Size.md})`,
    md: `(min-width: ${Size.md}) and (max-width: ${Size.lg})`,
    lg: `(min-width: ${Size.lg}) and (max-width: ${Size.xl})`,
    xl: `(min-width: ${Size.xl}) and (max-width: ${Size.xxl})`,
    xxl: `(min-width: ${Size.xxl})`
}

export default Device