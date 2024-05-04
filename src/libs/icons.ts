const equivalence: { [key: string]: string } = {
    Mexico: "openmoji:flag-mexico",
    Uruguay: "openmoji:flag-uruguay",
    Latam: "openmoji:bavaria-flag",
    Bolivia: "openmoji:flag-bolivia",
    "Republica Dominicana": "openmoji:flag-dominican-republic",
    Colombia: "openmoji:flag-colombia",
    Honduras: "openmoji:flag-honduras",
    Argentina: "openmoji:flag-argentina",
    Nicaragua: "openmoji:flag-nicaragua",
    Panama: "openmoji:flag-panama",
    Peru: "openmoji:flag-peru",
    Ecuador: "openmoji:flag-ecuador",
    Brasil: "openmoji:flag-brazil",
    "Costa Rica": "openmoji:flag-costa-rica",
    Chile: "openmoji:flag-chile",
};

export const getIconByCountry = (countryName: string) => {
    return equivalence[countryName];
};