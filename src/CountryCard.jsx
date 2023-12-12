export default ({ countryName, flagUrl, population, capital }) => {
    return (
        <figure className="card">
            <h3>{countryName}</h3>
            <figure>
                <img src={flagUrl} alt={`${countryName}'s flag`} />
            </figure>
            <div className="caption">
                <span><h4>{`Population: `}</h4>{population}</span>
                <span><h4>{`Capital: `}</h4>{capital}</span>
            </div>

        </figure>
    )
}
