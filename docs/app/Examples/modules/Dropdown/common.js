import _ from 'lodash'

export const stateOptions = [
  { value: 'AL', text: 'Alabama' },
  { value: 'AK', text: 'Alaska' },
  { value: 'AZ', text: 'Arizona' },
  { value: 'AR', text: 'Arkansas' },
  { value: 'CA', text: 'California' },
  { value: 'CO', text: 'Colorado' },
  { value: 'CT', text: 'Connecticut' },
  { value: 'DE', text: 'Delaware' },
  { value: 'DC', text: 'District Of Columbia' },
  { value: 'FL', text: 'Florida' },
  { value: 'GA', text: 'Georgia' },
  { value: 'HI', text: 'Hawaii' },
  { value: 'ID', text: 'Idaho' },
  { value: 'IL', text: 'Illinois' },
  { value: 'IN', text: 'Indiana' },
  { value: 'IA', text: 'Iowa' },
  { value: 'KS', text: 'Kansas' },
  { value: 'KY', text: 'Kentucky' },
  { value: 'LA', text: 'Louisiana' },
  { value: 'ME', text: 'Maine' },
  { value: 'MD', text: 'Maryland' },
  { value: 'MA', text: 'Massachusetts' },
  { value: 'MI', text: 'Michigan' },
  { value: 'MN', text: 'Minnesota' },
  { value: 'MS', text: 'Mississippi' },
  { value: 'MO', text: 'Missouri' },
  { value: 'MT', text: 'Montana' },
  { value: 'NE', text: 'Nebraska' },
  { value: 'NV', text: 'Nevada' },
  { value: 'NH', text: 'New Hampshire' },
  { value: 'NJ', text: 'New Jersey' },
  { value: 'NM', text: 'New Mexico' },
  { value: 'NY', text: 'New York' },
  { value: 'NC', text: 'North Carolina' },
  { value: 'ND', text: 'North Dakota' },
  { value: 'OH', text: 'Ohio' },
  { value: 'OK', text: 'Oklahoma' },
  { value: 'OR', text: 'Oregon' },
  { value: 'PA', text: 'Pennsylvania' },
  { value: 'RI', text: 'Rhode Island' },
  { value: 'SC', text: 'South Carolina' },
  { value: 'SD', text: 'South Dakota' },
  { value: 'TN', text: 'Tennessee' },
  { value: 'TX', text: 'Texas' },
  { value: 'UT', text: 'Utah' },
  { value: 'VT', text: 'Vermont' },
  { value: 'VA', text: 'Virginia' },
  { value: 'WA', text: 'Washington' },
  { value: 'WV', text: 'West Virginia' },
  { value: 'WI', text: 'Wisconsin' },
  { value: 'WY', text: 'Wyoming' },
]

export const friendOptions = [
  {
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: `${__BASE__}assets/images/avatar/small/jenny.jpg` },
  },
  {
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: `${__BASE__}assets/images/avatar/small/elliot.jpg` },
  },
  {
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: `${__BASE__}assets/images/avatar/small/stevie.jpg` },
  },
  {
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: `${__BASE__}assets/images/avatar/small/christian.jpg` },
  },
  {
    text: 'Matt',
    value: 'Matt',
    image: { avatar: true, src: `${__BASE__}assets/images/avatar/small/matt.jpg` },
  },
  {
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
    image: { avatar: true, src: `${__BASE__}assets/images/avatar/small/justen.jpg` },
  },
]

export const countryOptions = [
  { value: 'af', flag: 'af', text: 'Afghanistan' },
  { value: 'ax', flag: 'ax', text: 'Aland Islands' },
  { value: 'al', flag: 'al', text: 'Albania' },
  { value: 'dz', flag: 'dz', text: 'Algeria' },
  { value: 'as', flag: 'as', text: 'American Samoa' },
  { value: 'ad', flag: 'ad', text: 'Andorra' },
  { value: 'ao', flag: 'ao', text: 'Angola' },
  { value: 'ai', flag: 'ai', text: 'Anguilla' },
  { value: 'ag', flag: 'ag', text: 'Antigua' },
  { value: 'ar', flag: 'ar', text: 'Argentina' },
  { value: 'am', flag: 'am', text: 'Armenia' },
  { value: 'aw', flag: 'aw', text: 'Aruba' },
  { value: 'au', flag: 'au', text: 'Australia' },
  { value: 'at', flag: 'at', text: 'Austria' },
  { value: 'az', flag: 'az', text: 'Azerbaijan' },
  { value: 'bs', flag: 'bs', text: 'Bahamas' },
  { value: 'bh', flag: 'bh', text: 'Bahrain' },
  { value: 'bd', flag: 'bd', text: 'Bangladesh' },
  { value: 'bb', flag: 'bb', text: 'Barbados' },
  { value: 'by', flag: 'by', text: 'Belarus' },
  { value: 'be', flag: 'be', text: 'Belgium' },
  { value: 'bz', flag: 'bz', text: 'Belize' },
  { value: 'bj', flag: 'bj', text: 'Benin' },
  { value: 'bm', flag: 'bm', text: 'Bermuda' },
  { value: 'bt', flag: 'bt', text: 'Bhutan' },
  { value: 'bo', flag: 'bo', text: 'Bolivia' },
  { value: 'ba', flag: 'ba', text: 'Bosnia' },
  { value: 'bw', flag: 'bw', text: 'Botswana' },
  { value: 'bv', flag: 'bv', text: 'Bouvet Island' },
  { value: 'br', flag: 'br', text: 'Brazil' },
  { value: 'vg', flag: 'vg', text: 'British Virgin Islands' },
  { value: 'bn', flag: 'bn', text: 'Brunei' },
  { value: 'bg', flag: 'bg', text: 'Bulgaria' },
  { value: 'bf', flag: 'bf', text: 'Burkina Faso' },
  { value: 'bi', flag: 'bi', text: 'Burundi' },
  { value: 'tc', flag: 'tc', text: 'Caicos Islands' },
  { value: 'kh', flag: 'kh', text: 'Cambodia' },
  { value: 'cm', flag: 'cm', text: 'Cameroon' },
  { value: 'ca', flag: 'ca', text: 'Canada' },
  { value: 'cv', flag: 'cv', text: 'Cape Verde' },
  { value: 'ky', flag: 'ky', text: 'Cayman Islands' },
  { value: 'cf', flag: 'cf', text: 'Central African Republic' },
  { value: 'td', flag: 'td', text: 'Chad' },
  { value: 'cl', flag: 'cl', text: 'Chile' },
  { value: 'cn', flag: 'cn', text: 'China' },
  { value: 'cx', flag: 'cx', text: 'Christmas Island' },
  { value: 'cc', flag: 'cc', text: 'Cocos Islands' },
  { value: 'co', flag: 'co', text: 'Colombia' },
  { value: 'km', flag: 'km', text: 'Comoros' },
  { value: 'cg', flag: 'cg', text: 'Congo Brazzaville' },
  { value: 'cd', flag: 'cd', text: 'Congo' },
  { value: 'ck', flag: 'ck', text: 'Cook Islands' },
  { value: 'cr', flag: 'cr', text: 'Costa Rica' },
  { value: 'ci', flag: 'ci', text: 'Cote Divoire' },
  { value: 'hr', flag: 'hr', text: 'Croatia' },
  { value: 'cu', flag: 'cu', text: 'Cuba' },
  { value: 'cy', flag: 'cy', text: 'Cyprus' },
  { value: 'cz', flag: 'cz', text: 'Czech Republic' },
  { value: 'dk', flag: 'dk', text: 'Denmark' },
  { value: 'dj', flag: 'dj', text: 'Djibouti' },
  { value: 'dm', flag: 'dm', text: 'Dominica' },
  { value: 'do', flag: 'do', text: 'Dominican Republic' },
  { value: 'ec', flag: 'ec', text: 'Ecuador' },
  { value: 'eg', flag: 'eg', text: 'Egypt' },
  { value: 'sv', flag: 'sv', text: 'El Salvador' },
  { value: 'gb', flag: 'gb', text: 'England' },
  { value: 'gq', flag: 'gq', text: 'Equatorial Guinea' },
  { value: 'er', flag: 'er', text: 'Eritrea' },
  { value: 'ee', flag: 'ee', text: 'Estonia' },
  { value: 'et', flag: 'et', text: 'Ethiopia' },
  { value: 'eu', flag: 'eu', text: 'European Union' },
  { value: 'fk', flag: 'fk', text: 'Falkland Islands' },
  { value: 'fo', flag: 'fo', text: 'Faroe Islands' },
  { value: 'fj', flag: 'fj', text: 'Fiji' },
  { value: 'fi', flag: 'fi', text: 'Finland' },
  { value: 'fr', flag: 'fr', text: 'France' },
  { value: 'gf', flag: 'gf', text: 'French Guiana' },
  { value: 'pf', flag: 'pf', text: 'French Polynesia' },
  { value: 'tf', flag: 'tf', text: 'French Territories' },
  { value: 'ga', flag: 'ga', text: 'Gabon' },
  { value: 'gm', flag: 'gm', text: 'Gambia' },
  { value: 'ge', flag: 'ge', text: 'Georgia' },
  { value: 'de', flag: 'de', text: 'Germany' },
  { value: 'gh', flag: 'gh', text: 'Ghana' },
  { value: 'gi', flag: 'gi', text: 'Gibraltar' },
  { value: 'gr', flag: 'gr', text: 'Greece' },
  { value: 'gl', flag: 'gl', text: 'Greenland' },
  { value: 'gd', flag: 'gd', text: 'Grenada' },
  { value: 'gp', flag: 'gp', text: 'Guadeloupe' },
  { value: 'gu', flag: 'gu', text: 'Guam' },
  { value: 'gt', flag: 'gt', text: 'Guatemala' },
  { value: 'gw', flag: 'gw', text: 'Guinea-Bissau' },
  { value: 'gn', flag: 'gn', text: 'Guinea' },
  { value: 'gy', flag: 'gy', text: 'Guyana' },
  { value: 'ht', flag: 'ht', text: 'Haiti' },
  { value: 'hm', flag: 'hm', text: 'Heard Island' },
  { value: 'hn', flag: 'hn', text: 'Honduras' },
  { value: 'hk', flag: 'hk', text: 'Hong Kong' },
  { value: 'hu', flag: 'hu', text: 'Hungary' },
  { value: 'is', flag: 'is', text: 'Iceland' },
  { value: 'in', flag: 'in', text: 'India' },
  { value: 'io', flag: 'io', text: 'Indian Ocean Territory' },
  { value: 'id', flag: 'id', text: 'Indonesia' },
  { value: 'ir', flag: 'ir', text: 'Iran' },
  { value: 'iq', flag: 'iq', text: 'Iraq' },
  { value: 'ie', flag: 'ie', text: 'Ireland' },
  { value: 'il', flag: 'il', text: 'Israel' },
  { value: 'it', flag: 'it', text: 'Italy' },
  { value: 'jm', flag: 'jm', text: 'Jamaica' },
  { value: 'jp', flag: 'jp', text: 'Japan' },
  { value: 'jo', flag: 'jo', text: 'Jordan' },
  { value: 'kz', flag: 'kz', text: 'Kazakhstan' },
  { value: 'ke', flag: 'ke', text: 'Kenya' },
  { value: 'ki', flag: 'ki', text: 'Kiribati' },
  { value: 'kw', flag: 'kw', text: 'Kuwait' },
  { value: 'kg', flag: 'kg', text: 'Kyrgyzstan' },
  { value: 'la', flag: 'la', text: 'Laos' },
  { value: 'lv', flag: 'lv', text: 'Latvia' },
  { value: 'lb', flag: 'lb', text: 'Lebanon' },
  { value: 'ls', flag: 'ls', text: 'Lesotho' },
  { value: 'lr', flag: 'lr', text: 'Liberia' },
  { value: 'ly', flag: 'ly', text: 'Libya' },
  { value: 'li', flag: 'li', text: 'Liechtenstein' },
  { value: 'lt', flag: 'lt', text: 'Lithuania' },
  { value: 'lu', flag: 'lu', text: 'Luxembourg' },
  { value: 'mo', flag: 'mo', text: 'Macau' },
  { value: 'mk', flag: 'mk', text: 'Macedonia' },
  { value: 'mg', flag: 'mg', text: 'Madagascar' },
  { value: 'mw', flag: 'mw', text: 'Malawi' },
  { value: 'my', flag: 'my', text: 'Malaysia' },
  { value: 'mv', flag: 'mv', text: 'Maldives' },
  { value: 'ml', flag: 'ml', text: 'Mali' },
  { value: 'mt', flag: 'mt', text: 'Malta' },
  { value: 'mh', flag: 'mh', text: 'Marshall Islands' },
  { value: 'mq', flag: 'mq', text: 'Martinique' },
  { value: 'mr', flag: 'mr', text: 'Mauritania' },
  { value: 'mu', flag: 'mu', text: 'Mauritius' },
  { value: 'yt', flag: 'yt', text: 'Mayotte' },
  { value: 'mx', flag: 'mx', text: 'Mexico' },
  { value: 'fm', flag: 'fm', text: 'Micronesia' },
  { value: 'md', flag: 'md', text: 'Moldova' },
  { value: 'mc', flag: 'mc', text: 'Monaco' },
  { value: 'mn', flag: 'mn', text: 'Mongolia' },
  { value: 'me', flag: 'me', text: 'Montenegro' },
  { value: 'ms', flag: 'ms', text: 'Montserrat' },
  { value: 'ma', flag: 'ma', text: 'Morocco' },
  { value: 'mz', flag: 'mz', text: 'Mozambique' },
  { value: 'na', flag: 'na', text: 'Namibia' },
  { value: 'nr', flag: 'nr', text: 'Nauru' },
  { value: 'np', flag: 'np', text: 'Nepal' },
  { value: 'an', flag: 'an', text: 'Netherlands Antilles' },
  { value: 'nl', flag: 'nl', text: 'Netherlands' },
  { value: 'nc', flag: 'nc', text: 'New Caledonia' },
  { value: 'pg', flag: 'pg', text: 'New Guinea' },
  { value: 'nz', flag: 'nz', text: 'New Zealand' },
  { value: 'ni', flag: 'ni', text: 'Nicaragua' },
  { value: 'ne', flag: 'ne', text: 'Niger' },
  { value: 'ng', flag: 'ng', text: 'Nigeria' },
  { value: 'nu', flag: 'nu', text: 'Niue' },
  { value: 'nf', flag: 'nf', text: 'Norfolk Island' },
  { value: 'kp', flag: 'kp', text: 'North Korea' },
  { value: 'mp', flag: 'mp', text: 'Northern Mariana Islands' },
  { value: 'no', flag: 'no', text: 'Norway' },
  { value: 'om', flag: 'om', text: 'Oman' },
  { value: 'pk', flag: 'pk', text: 'Pakistan' },
  { value: 'pw', flag: 'pw', text: 'Palau' },
  { value: 'ps', flag: 'ps', text: 'Palestine' },
  { value: 'pa', flag: 'pa', text: 'Panama' },
  { value: 'py', flag: 'py', text: 'Paraguay' },
  { value: 'pe', flag: 'pe', text: 'Peru' },
  { value: 'ph', flag: 'ph', text: 'Philippines' },
  { value: 'pn', flag: 'pn', text: 'Pitcairn Islands' },
  { value: 'pl', flag: 'pl', text: 'Poland' },
  { value: 'pt', flag: 'pt', text: 'Portugal' },
  { value: 'pr', flag: 'pr', text: 'Puerto Rico' },
  { value: 'qa', flag: 'qa', text: 'Qatar' },
  { value: 're', flag: 're', text: 'Reunion' },
  { value: 'ro', flag: 'ro', text: 'Romania' },
  { value: 'ru', flag: 'ru', text: 'Russia' },
  { value: 'rw', flag: 'rw', text: 'Rwanda' },
  { value: 'sh', flag: 'sh', text: 'Saint Helena' },
  { value: 'kn', flag: 'kn', text: 'Saint Kitts and Nevis' },
  { value: 'lc', flag: 'lc', text: 'Saint Lucia' },
  { value: 'pm', flag: 'pm', text: 'Saint Pierre' },
  { value: 'vc', flag: 'vc', text: 'Saint Vincent' },
  { value: 'ws', flag: 'ws', text: 'Samoa' },
  { value: 'sm', flag: 'sm', text: 'San Marino' },
  { value: 'gs', flag: 'gs', text: 'Sandwich Islands' },
  { value: 'st', flag: 'st', text: 'Sao Tome' },
  { value: 'sa', flag: 'sa', text: 'Saudi Arabia' },
  { value: 'sn', flag: 'sn', text: 'Senegal' },
  { value: 'cs', flag: 'cs', text: 'Serbia' },
  { value: 'rs', flag: 'rs', text: 'Serbia' },
  { value: 'sc', flag: 'sc', text: 'Seychelles' },
  { value: 'sl', flag: 'sl', text: 'Sierra Leone' },
  { value: 'sg', flag: 'sg', text: 'Singapore' },
  { value: 'sk', flag: 'sk', text: 'Slovakia' },
  { value: 'si', flag: 'si', text: 'Slovenia' },
  { value: 'sb', flag: 'sb', text: 'Solomon Islands' },
  { value: 'so', flag: 'so', text: 'Somalia' },
  { value: 'za', flag: 'za', text: 'South Africa' },
  { value: 'kr', flag: 'kr', text: 'South Korea' },
  { value: 'es', flag: 'es', text: 'Spain' },
  { value: 'lk', flag: 'lk', text: 'Sri Lanka' },
  { value: 'sd', flag: 'sd', text: 'Sudan' },
  { value: 'sr', flag: 'sr', text: 'Suriname' },
  { value: 'sj', flag: 'sj', text: 'Svalbard' },
  { value: 'sz', flag: 'sz', text: 'Swaziland' },
  { value: 'se', flag: 'se', text: 'Sweden' },
  { value: 'ch', flag: 'ch', text: 'Switzerland' },
  { value: 'sy', flag: 'sy', text: 'Syria' },
  { value: 'tw', flag: 'tw', text: 'Taiwan' },
  { value: 'tj', flag: 'tj', text: 'Tajikistan' },
  { value: 'tz', flag: 'tz', text: 'Tanzania' },
  { value: 'th', flag: 'th', text: 'Thailand' },
  { value: 'tl', flag: 'tl', text: 'Timorleste' },
  { value: 'tg', flag: 'tg', text: 'Togo' },
  { value: 'tk', flag: 'tk', text: 'Tokelau' },
  { value: 'to', flag: 'to', text: 'Tonga' },
  { value: 'tt', flag: 'tt', text: 'Trinidad' },
  { value: 'tn', flag: 'tn', text: 'Tunisia' },
  { value: 'tr', flag: 'tr', text: 'Turkey' },
  { value: 'tm', flag: 'tm', text: 'Turkmenistan' },
  { value: 'tv', flag: 'tv', text: 'Tuvalu' },
  { value: 'ug', flag: 'ug', text: 'Uganda' },
  { value: 'ua', flag: 'ua', text: 'Ukraine' },
  { value: 'ae', flag: 'ae', text: 'United Arab Emirates' },
  { value: 'us', flag: 'us', text: 'United States' },
  { value: 'uy', flag: 'uy', text: 'Uruguay' },
  { value: 'um', flag: 'um', text: 'Us Minor Islands' },
  { value: 'vi', flag: 'vi', text: 'Us Virgin Islands' },
  { value: 'uz', flag: 'uz', text: 'Uzbekistan' },
  { value: 'vu', flag: 'vu', text: 'Vanuatu' },
  { value: 'va', flag: 'va', text: 'Vatican City' },
  { value: 've', flag: 've', text: 'Venezuela' },
  { value: 'vn', flag: 'vn', text: 'Vietnam' },
  { value: 'wf', flag: 'wf', text: 'Wallis and Futuna' },
  { value: 'eh', flag: 'eh', text: 'Western Sahara' },
  { value: 'ye', flag: 'ye', text: 'Yemen' },
  { value: 'zm', flag: 'zm', text: 'Zambia' },
  { value: 'zw', flag: 'zw', text: 'Zimbabwe' },
]

export const languageOptions = [
  { text: 'Arabic', value: 'Arabic' },
  { text: 'Chinese', value: 'Chinese' },
  { text: 'Danish', value: 'Danish' },
  { text: 'Dutch', value: 'Dutch' },
  { text: 'English', value: 'English' },
  { text: 'French', value: 'French' },
  { text: 'German', value: 'German' },
  { text: 'Greek', value: 'Greek' },
  { text: 'Hungarian', value: 'Hungarian' },
  { text: 'Italian', value: 'Italian' },
  { text: 'Japanese', value: 'Japanese' },
  { text: 'Korean', value: 'Korean' },
  { text: 'Lithuanian', value: 'Lithuanian' },
  { text: 'Persian', value: 'Persian' },
  { text: 'Polish', value: 'Polish' },
  { text: 'Portuguese', value: 'Portuguese' },
  { text: 'Russian', value: 'Russian' },
  { text: 'Spanish', value: 'Spanish' },
  { text: 'Swedish', value: 'Swedish' },
  { text: 'Turkish', value: 'Turkish' },
  { text: 'Vietnamese', value: 'Vietnamese' },
]

export const tagOptions = [
  {
    text: 'Important',
    value: 'Important',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    text: 'Announcement',
    value: 'Announcement',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    text: 'Cannot Fix',
    value: 'Cannot Fix',
    label: { color: 'black', empty: true, circular: true },
  },
  {
    text: 'News',
    value: 'News',
    label: { color: 'purple', empty: true, circular: true },
  },
  {
    text: 'Enhancement',
    value: 'Enhancement',
    label: { color: 'orange', empty: true, circular: true },
  },
  {
    text: 'Change Declined',
    value: 'Change Declined',
    label: { empty: true, circular: true },
  },
  {
    text: 'Off Topic',
    value: 'Off Topic',
    label: { color: 'yellow', empty: true, circular: true },
  },
  {
    text: 'Interesting',
    value: 'Interesting',
    label: { color: 'pink', empty: true, circular: true },
  },
  {
    text: 'Discussion',
    value: 'Discussion',
    label: { color: 'green', empty: true, circular: true },
  },
]

export const getOptions = (number, prefix = 'Choice ') => _.times(number, (index) => ({
  text: `${prefix}${index}`,
  value: `${index}`,
}))
