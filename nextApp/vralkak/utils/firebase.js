 import { cert, intitializeApp } from "firebase-admin/app";
 import {getFirestore} from "firebase-admin/firestore";

 intitializeApp(
   {
     credential: cert({
       projectId: "vralkak",
       clientEmail:"firebase-adminsdk-z1tom@vralkak.iam.gserviceaccount.com",
       privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCnpE7n05y38MS8\nAr3RNWrmO5hMqrLTOljhs75E4NKrrxqYF4QfgSyQKMA25e6f9HcQ6bExqzHmSegp\nu2/HUkdzbmDmGAG6WrosTjTkZGzUPKPFqKUolJnICbxBnlH5PlDL+Ru3EpGSucc+\nI+ThpExZY3OZU8pVlPUz4WZljTaSaHwJFzKw1oeoAvTvtnLNsRtPKNyEzNrpZ5FU\n7u/nrJGx/LWUFSQe2stV0/oBDpaxuvohuYnmi2guseh1ehLjQLN9sVbJ9YsVBzhC\nkbHc7JWgG5kJBpcym+Wx/lPT1OjLQ5HBnu1GVHoE5CuQl59uWzCBcOeSmB4DnNnW\nBUh1yucXAgMBAAECggEANTejNtPF4dyET5zdLh8zfr/3YosjtotEsO2S3qGyLv8o\nxZRdhHTItUDCeAr4+/0qmQtejUJn1k+q7CiM3O0BMqMdDp4bWlG33R28i65Xn+5a\nHQKi32WBBfAVO41rP2CpXH8Jbc3uuXHRTqgtXfX+qLe5+DgRuKZPSrdofp9b7hDJ\nv6rHFfjB646aZwOTnRuoYdBPYcZI0dVuhqu9PE3+UUhdl6vpasMGw4zFKwiTW3tO\nmGJObR9GKPHPQiikw5ExT7rY7wdxQIsDOdcKdVarDpalPLV+BSS+2SsV/u89qBO+\nwoLwzmYguJFkBk06oDBKCwkF/kSySjLQ60OxbO30zQKBgQDoQuhzXgJuf7SoOr2G\n9Du+mOTciCGtQHpwjZzwNAnF28xA24cqvmCxp/7Dechf/P1TN4Mq9fh+tHdfam7d\nt3E0MkRrubW4qPG0eAg1DRNpyVspbdtP2JIA4sbkKHdNR673TtgRr9G6y9l3hkeT\nuBGrdN3LjfOWWXvViUYhvhIMzQKBgQC4xqM3rqA/B0j3RYteN136AFoSoMjzABX7\ngvTZ1RpQQP0QxdmhaYcq/cQTWDeCse1W1mowjosbbuVmhZKDx3tk09S3HPfT8r2q\nd7ohvm3SzXvIPbWjyqUVvc/YI4vEx/kZunnJlnAN3KLEiGYyGT7LBIa+FxqjmSi2\nTzyw46vDcwKBgFo7rD0t17oAKTp2X61vc0qP8dHvnU3G0AqsKb10KhvRUaAc6X1k\nqwI6JxLgXEVWb0CGP5JQLzNif0H1go7mtrc1lDlZ08yi7gxT2bRqmREvJhiJUnvJ\nwqdPcz+urPK8F7CC1BTC/rMYgSsbYvFzwIGhDI4JXwoZR6/k/fcb9b09AoGAVUJS\nzb6l8m9KG87bH/4sPs8qwK2wC3BetE8Y6+qI2b8jBjpE0VYAKLYvYz2xX3z6JreJ\nCB690Uq6TzQTBvtk1IFqBZQ4RnQbUC0ulaNoyXxHQX438fvvcLjEztaYB5S+PEDv\nMTVZPwwvjr/hZ/x+HO9ZvRysDhD92CF3v6dN+kECgYA8jXXFqWA590W0BX9SPKu7\n2yOT0JBvbeAsD92ll1hTgSMcX1P6k8Qnui7IBV211P3nIKrqVhgiHj5WtruokoXd\nWJM4zYEzq5XGfbo5eUzm95Pb9+577n4bGJ+0dxHyXZNhy1GQFiB6cnmIbWdiPWD4\nEahqNrUY5DehA1AdB5gmLQ==\n-----END PRIVATE KEY-----\n"
     })
   }
 )

 export const firestore = getFirestore(app);