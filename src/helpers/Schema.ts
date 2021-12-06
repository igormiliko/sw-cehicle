import * as yup from 'yup'
import { useValidationsBR } from 'validations-br';

const sellSchema = yup.object().shape({
    firstName: yup.string().required('Seu nome por favor...') ,
    lastName: yup.string().required('O sobrenome também!'),
    email: yup.string().email().required('Digite seu email'),
    ccNumber: yup.string()
                 .test('CC-Numero,',
                       'Número de cartão inválido',
                       (value: any) => {
                            if (/[^0-9-\s]+/.test(value)) return false;
                            let nCheck = 0, bEven = false;
                            value = value.replace(/\D/g, "");
                            for (var n = value.length - 1; n >= 0; n--) {
                                var cDigit = value.charAt(n),
                                        nDigit = parseInt(cDigit, 10);
                        
                                if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
                                nCheck += nDigit;
                                bEven = !bEven;
                            }
                            return (nCheck % 10) === 0;
                        })
                 .required('Coloque o número do cartão'),
    ccName: yup.string().required('Digite o nome que está no cartão'),
    cvv: yup.string().required('Lembre-se do cvv!'),
    validade: yup.string().required('Digite a validade'),
    cpfCnpj: yup.string()
                .test('cpf/cnpj',
                    'Formato inválido!',
                    (value: any) => {
                        return !!value ? (useValidationsBR('cnpj', value) || 
                                        useValidationsBR('cpf', value)) :
                                        true
                    })
                .required('Digite o seu CPF/CNJP'),
    cep: yup.string()
            .required('Digite o seu CEP'),
    endereco: yup.string().required('Coloque o seu endereço'),
    numero: yup.string().required('O número'),
    complemento: yup.string().required('Use um complemento!'),
    cidade: yup.string().required('Qual sua cidade?'),
    bairro: yup.string().required('...e o bairro?'),
    estado: yup.string().required('Lembre do Estado!'), 
})

export default sellSchema;
