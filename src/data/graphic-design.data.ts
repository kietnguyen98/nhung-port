import { TProject } from '@/types/project.type';
import { GOOGLE_DRIVE_FILE_PREFIX, BRAND_LOGO_URL_PREFIX } from '@/constants';

export const projectMockData: Array<TProject> = [
    {
        name: 'Graphic Design',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        outerImageUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1u0d6tmSjKKv9Sh-g0JwGHhxCzgdzDefn`,
        introImageUrl: [
            `${GOOGLE_DRIVE_FILE_PREFIX}11gdILO7VKmQg2_x8r7OJ-cCK8s9Ffamw`,
            `${GOOGLE_DRIVE_FILE_PREFIX}1AtbZk5Z8BjCvRTh6RpjMIzNvlhGJOLwB`,
            `${GOOGLE_DRIVE_FILE_PREFIX}1_5jpuOaGH_qFVGPpMhx5f3GG5V5fsFt7`,
        ],
        demoImages: {
            mainImageUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1CoX2Q41HrJaCGxcLSXNKHmKx1fUj_tFm`,
            subImageUrls: [
                `${GOOGLE_DRIVE_FILE_PREFIX}10-yIuYDzR2LDTJJWsD0C82QZq4IPKPgp`,
                `${GOOGLE_DRIVE_FILE_PREFIX}1zmEmLE9ZddEfaiwVnbuEdW5jGErLKMHv`,
                `${GOOGLE_DRIVE_FILE_PREFIX}1WSXSGjlnskTpvvW4u743m0RtueM9wJtd`,
            ],
        },
        brands: [
            {
                name: '50 Megumi',
                logoURL: `${BRAND_LOGO_URL_PREFIX}50_megumi.png`,
                postImageUrls: [
                    `${GOOGLE_DRIVE_FILE_PREFIX}15neHyObqbe1tRgqY26peO2-Ra6xAZn8J`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1WmR4fMDcHtEkDH3BzoLO3ghayrZfh9KO`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1M_gOYXSxSzmAfZ2hNELy-iTUnBs3k5nc`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1wPnqDlMXPmfO9IskuoBFlK1pHkbFZV31`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1iZYn9TK3K9IlS9UvCVwAR56-u1QcTiw6`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1Eyka2wMRF3G8Lkx6dpfknnaEHOAxiySH`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1D9Tvvbwrnpb8lpuLXNrSUkCni1n5lso5`,
                ],
            },
            {
                name: 'Skin Aqua',
                logoURL: `${BRAND_LOGO_URL_PREFIX}skin_aqua.png`,
                postImageUrls: [
                    // guardian
                    `${GOOGLE_DRIVE_FILE_PREFIX}1apugyQUpLpYCP2YmgQSFJnXDbQ69Vrzr`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1Uh-W2rXhRgcIFYOop_lt7Uiyeuvw2Dln`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1QLFHc3-l9iXxTeE-jq7KBVAEtRwfwwe8`,
                    // sunplay
                    `${GOOGLE_DRIVE_FILE_PREFIX}1AtbZk5Z8BjCvRTh6RpjMIzNvlhGJOLwB`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1DeUU4tA2aRrWm5gAIPP0l7mQICFdrbJ2`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1Ld-Mg3YMKN9LWIvGJyY095LK880-dhzK`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1WSXSGjlnskTpvvW4u743m0RtueM9wJtd`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}158Sri0v9g-sspjHwSJllIm6st_bCwb4L`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1feraQUtmQxMZWONX0u-goqXymcuFQXeD`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1RnjS9GNKb0Qj07l4gKrYxjBas-KdASzr`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1esQhWetdg0rd3ApO3H6wCeBL9FqDXtaH`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1UYYXM3j60CSOSm-Q9IfUasWPkkRMI67K`,
                ],
            },
            {
                name: 'Sociolla',
                logoURL: `${BRAND_LOGO_URL_PREFIX}sociolla.webp`,
                postImageUrls: [
                    `${GOOGLE_DRIVE_FILE_PREFIX}11gdILO7VKmQg2_x8r7OJ-cCK8s9Ffamw`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}14CWrpluLsF8uFNxKNz_1jyFzIC83CKDh`,
                ],
            },
            {
                name: 'Shark Tank 6',
                logoURL: `${BRAND_LOGO_URL_PREFIX}sharktank.png`,
                postImageUrls: [],
            },
            {
                name: 'Hannah Olala',
                logoURL: `${BRAND_LOGO_URL_PREFIX}hannah_olala.png`,
                postImageUrls: [],
            },
            {
                name: 'Rohto Health Science',
                logoURL: `${BRAND_LOGO_URL_PREFIX}rohto_health_science.png`,
                postImageUrls: [],
            },
            {
                name: 'Selsun',
                logoURL: `${BRAND_LOGO_URL_PREFIX}selsun.png`,
                postImageUrls: [
                    `${GOOGLE_DRIVE_FILE_PREFIX}1KONJvSVp2nhMNi9Mqs98XN1UIY-WvAot`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1ugUU-NYs7zFvN9BLEz4TI6kVLPE-_nqo`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1ajjBCvlXdmgZZNM1TmjtiOn879PhLHuM`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}18crfXT1HiDcTr7vKSMscbT_B5KlQE1iK`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1O0BOl6GB7boXUTp6MLMaF5PwltLET9vL`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1z6RhVkqF1S2Jj2SY3HS3p_x3hNkNo_gj`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1j5_h77sz9Q_OwrTSgP56Bt-wJXslJ219`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}16lDMYbQHJg5_-w5ahKKcoI8IkLnvDwKr`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}`,
                ],
            },
            {
                name: 'Refre',
                logoURL: `${BRAND_LOGO_URL_PREFIX}refree.png`,
                postImageUrls: [
                    `${GOOGLE_DRIVE_FILE_PREFIX}12a_TYKNhOhjuEgpImTIJtzpfbQtczE5j`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1tJKq_1cUhHYE9wRgpNZVm-2EEOlZKnVd`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}114lo5zT3PObs8KaW8SWoFDyMKBPF1bQ8`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1iZpICfplXMT-BvPCrMOtY1wyUYNvEh5U`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1ChYh2k5WJd_N657oQZomxCYi8FmrYja5`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1HG8TFBxiVmr3Xvbj--FXdUZVZedJH0DE`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1yiv6D6ryc6OmKWmKLjI1ZDvFgZPIFLXV`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1Qj2LZJ19bUxMu3-bEE3GSFgB_zpl2gvi`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1x_wakEUXabAdd8s_SWjcJcEy6S72Ot5n`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1ymrtkd0e3sEisTs6Vqi8QV4iwZW4WrtU`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1AgQuT5ypEkNnllsuIspr-234CAGxatcr`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1XQFufGSZBo5UadCbuEUpzFtctCidVxdr`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}17-P77w5207eUf2VmsdkQd_yPTVjb-9YM`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1aJdFOWajfM48RYo3JEtLSZyt2h_NQh3T`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1Id7KYWDaqOgBL2NfoBKN1t8e90tNJLd-`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1Ifm-uGZgDEd3-RvsNYyr1UvDChD8tX6t`,
                ],
            },
            {
                name: 'Lipice Hello Kitty',
                logoURL: `${BRAND_LOGO_URL_PREFIX}lipice_kitty.png`,
                postImageUrls: [
                    `${GOOGLE_DRIVE_FILE_PREFIX}1CoX2Q41HrJaCGxcLSXNKHmKx1fUj_tFm`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1go2jUIK02_ZuVN99OnP3vix1ZmVkYqeE`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}135PMCk6AKQWUooAYN7nPvPK8HNAnefVr`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1CAqO5KcKFzzNCeAdUMs1eo2OOU-7LwcE`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}19j0lvuz_jPhfg9AiZFZdF7QKeWXW7MBc`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1RpeGEZR-W2aE4arfxlB8W6rJi4WwW4XZ`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1irTeczZVTQuOpxIN2HpJZUo32GGuNUU5`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}16JlVyOeWV0eGy-L8bP03Ot0MsTlIJ2wE`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1I-Cn1OWZO8c2jJeimMYybq91m-pocgai`,
                ],
            },
            {
                name: 'Lipice Lipbalm',
                logoURL: `${BRAND_LOGO_URL_PREFIX}lipice_lipbalm.png`,
                postImageUrls: [
                    `${GOOGLE_DRIVE_FILE_PREFIX}1eVH4V5xBfUqHsjQyt7_q9puDwF17S9m9`,
                ],
            },
            {
                name: 'Melty Cream Lip',
                logoURL: `${BRAND_LOGO_URL_PREFIX}melty_cream.png`,
                postImageUrls: [
                    `${GOOGLE_DRIVE_FILE_PREFIX}18COYg19hliMFGn8g4TrcgRdgaWJA6BGm`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1GE9NdREChWyraJl-nSivXGunry5aczib`,
                ],
            },
            {
                name: 'Mentholatum',
                logoURL: `${BRAND_LOGO_URL_PREFIX}mentholatum_raw.png`,
                postImageUrls: [
                    `${GOOGLE_DRIVE_FILE_PREFIX}1wRDK-dpp2cE4h-nTEMF0drvVdbBm3CWg`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1zmEmLE9ZddEfaiwVnbuEdW5jGErLKMHv`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}184C03-CePq9ixcsYmH6tLjBuvGLfwuok`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1jFvvMJw1At0opD9xWbV_kPOltpSBNVQL`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1wd2FTQKh7Q1x7ZielluGjd01W7hZdRxw`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1KSyo7fTToKrzd82nWCav8ZJJwh6BgPwo`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1bPweCSDXMiWgGwaLfWjVaw4u8tvvWlCL`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1R7WLB1xpL3sUDDqG1e21mcrQogYsKF40`,
                ],
            },
            {
                name: 'Lipice Sheer Color',
                logoURL: `${BRAND_LOGO_URL_PREFIX}lipice_mentholatum_sheer.png`,
                postImageUrls: [
                    `${GOOGLE_DRIVE_FILE_PREFIX}1SvnJVhygxYSoT3Yue1fRNzBCJFcfz5Bf`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1zFhmKf7fhPdv8A8lYeRY8o6otoZ3LVlm`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}17eqAIqre9per8KoE9paPHm2Xm4MbLVqh`,
                ],
            },
            {
                name: 'Lipice Sheer Q',
                logoURL: `${BRAND_LOGO_URL_PREFIX}lipice_sheer_q_pink.png`,
                postImageUrls: [
                    `${GOOGLE_DRIVE_FILE_PREFIX}1u0d6tmSjKKv9Sh-g0JwGHhxCzgdzDefn`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1WicirFeicMEKHaWVHm_TDl8VodSifxvs`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}10-yIuYDzR2LDTJJWsD0C82QZq4IPKPgp`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1ABCMz-dWpzlX70PGMyiyqHCVwxJ7ukDq`,
                ],
            },
            {
                name: 'LIPonLip',
                logoURL: `${BRAND_LOGO_URL_PREFIX}lip_on_lip.png`,
                postImageUrls: [
                    `${GOOGLE_DRIVE_FILE_PREFIX}1pKCa6OBnYNPI4UnAh1Ls48fHHf1WoefF`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1a91I03D7qoq9zYhmdC6cHpw8EicNkl-Y`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1_5jpuOaGH_qFVGPpMhx5f3GG5V5fsFt7`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1W6TNV2sFkwoBiRMhzYiiIyjALtgysbOd`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1oB4dhE_9cD0crPlZzz0KeRY7AMb0jFjS`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}118dpqCG4qm4uyfWCX9a-HTfKD7r8ZTJe`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1k6I6xpJ4h18jYypoLtWuiFdmgeve8p9I`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1A6JUAD4dbl8uNGr_D5ALPYSvh6JFB4f4`,
                ],
            },
            {
                name: 'Lipstician',
                logoURL: `${BRAND_LOGO_URL_PREFIX}lipstician.png`,
                postImageUrls: [
                    `${GOOGLE_DRIVE_FILE_PREFIX}1hV2pPA4C-zoHaC_W4qh3GAitn-faQ94F`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1rMCqjIxLzbOAoxGiMBGstLtAp6QMhgKt`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}13vKqVQMMmq8OK8BpNjf2zxFRVWd4VkIP`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1Il76oM7UwjLuWnRmsY-DuZkcvwvfhvun`,
                ],
            },
            {
                name: 'Hasaki',
                logoURL: `${BRAND_LOGO_URL_PREFIX}hasaki.png`,
                postImageUrls: [
                    `${GOOGLE_DRIVE_FILE_PREFIX}1S3fed_E-IZ-wPwMw9u4ITsx3-_5b1jWV`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}1e6YLhrZLBP2DzwN2FzN_ymHF3gK_kdOs`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}15Si53srdS8fkHxZDisNAcZzaA1pMSD5p`,
                ],
            },
            {
                name: 'Huong Nghiep Day Nghe',
                logoURL: `${BRAND_LOGO_URL_PREFIX}huong_nghiep_day_nghe.png`,
                postImageUrls: [
                    `${GOOGLE_DRIVE_FILE_PREFIX}1XSD_ppqCUwFgdfzoTmNr-xID297SeQOG`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}18N7ZxS1eD2Ekp4BTz8mbO_-_hAYa8nNZ`,
                    `${GOOGLE_DRIVE_FILE_PREFIX}`,
                ],
            },
        ],
    },
];
