// Under the Hood
import { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Field, Form, Formik} from 'formik';
import { motion } from 'framer-motion';

// App componentes
import Button from '../components/Button';
import CardCheckout from '../components/CardCheckout';
import PaymentType from '../components/PaymentType';
import Policy from '../components/Policy';
import EmailCheckbox from '../components/EmailCheckbox';
import TrustCheckout from '../components/TrustCheckout';
import toast, { Toaster } from "react-hot-toast";

//Store
import store from '../Stores/storeVehicle';

//Helpers
import sellSchema from '../helpers/Schema'
import { useHistory } from 'react-router';
import axios from 'axios';

interface Values {
    firstName: string,
    lastName: string,
    email: string,
    ccNumber: string,
    ccName: string,
    cvv: string,
    validade: string,
    cpfCnpj: string,
    cep: string,
    endereco: string,
    numero: string,
    complemento: string,
    cidade: string,
    bairro: string,
    estado: string,       
}

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    ccNumber: '',
    ccName: '',
    cvv: '',
    validade: '',
    cpfCnpj: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    cidade: '',
    bairro: '',
    estado: '',
}

const Checkout: React.FunctionComponent = () => {
    const lgInptStyle = `flex flex-col border-b-2 text-lg h-12 outline-none px-4 w-80 hover:shadow-xl`
    const smInptStyle = `border-b-2 text-lg h-12 outline-none px-4 w-36 hover:shadow-xl`
    const [vehicle, setVehicle] = useState(Object)
    const history = useHistory()
    // const [paymentType, setPaymentType] = useState(String)
    const successToast = () => toast.success("Compra realizada com sucesso!")
    const errorToast = () => toast.error('Confira todos os dados!')

    const showToasts = (conditional:any) => {
        !conditional ? errorToast() : successToast()
    }


    async function asyncFillAddress(e: string, setFieldValue: any) {
        if(e.length !==8) return; 

        let url = `https://viacep.com.br/ws/${String(e)}/json`
        fetch(url)
            .then(res => res.json())
            .then(address => {
                setFieldValue('endereco', address.logradouro)
                setFieldValue('cidade', address.localidade)
                setFieldValue('bairro', address.bairro)
                setFieldValue('estado', address.uf)
            })
    }

    function handleSubmit(data: Object){
       
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')


        const options: object = {
        method: 'POST',
        headers,
        mode: 'cors',
        body: JSON.stringify(data),
        }

        fetch('https://eniszrmslhj6rku.m.pipedream.net', options)
            .then(res => {
                console.log(res)
                if (res.status !== 200) {
                    toast.error(`Erro ${res.status}`)
                }
                else history.push('/success')
            })
    }

    useEffect(() => {
        setVehicle(store.loadVehicle())
    },[])
    
    return (
        <motion.div
            initial={{ translateX: '-33px', opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: '33px', opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div>      
                <div className="flex flex-col 
                                justify-center 
                                items-center 
                                w-screen 
                                overflow-x-hidden 
                                pb-12
                ">
                    <Formik initialValues={initialValues}
                            validationSchema={sellSchema}
                            onSubmit={(values: Values, actions) => {
                                handleSubmit(values)
                            }
                    }>
                {({ errors, touched, setFieldValue, isValidating, isSubmitting}) => (
                        <Form>
                            <div className="space-y-8 
                                            mt-12
                                            relative
                            ">
                                <div className="space-y-8 
                                                md:space-x-8 
                                                md:flex 
                                                md:flex-row 
                                                md:items-center
                                ">
                                    <div>
                                        <div className="mt-6 
                                                        w-full 
                                                        flex 
                                                        justify-center
                                        ">
                                            <TrustCheckout />  
                                        </div>
                                            <CardCheckout img={vehicle.img} 
                                                        alt={vehicle.name} 
                                                        price={vehicle.price} 
                                                        name={vehicle.name} 
                                                        company={vehicle.company} 
                                            />
                                    </div>
                                    <div className="space-y-8">
                                        <div className="mt-6 
                                                        w-full 
                                                        flex 
                                                        justify-center">
                                            <PaymentType />
                                        </div>
                                            <div className="w-80 ">
                                                {errors.ccNumber && touched.ccNumber ?
                                                    (<label className="text-red-500 text-sm">{errors.ccNumber}</label>) : null}
                                                <Field className={`${lgInptStyle} ${errors.ccNumber && touched.ccNumber ? 'border-red-500 shake' : 'border-blue-800'}`} 
                                                    id={'ccNumber'}
                                                    name={'ccNumber'}
                                                    placeholder={'Número do Cartão'}                
                                                    type={'string'}
                                                />
                                            </div>
                                                <div className="w-80">
                                                    {errors.ccName && touched.ccName ?
                                                        (<label className="text-red-500 text-sm">{errors.ccName}</label>) : null}
                                                        <Field className={`${lgInptStyle} ${errors.ccName && touched.ccName ? 'border-red-500 shake' : 'border-blue-800'}`}
                                                            id={'ccName'}
                                                            name={'ccName'}
                                                            placeholder={'Nome Impresso'}                  
                                                            type={'text'}                        
                                                        />
                                                </div>
                                        <div className="w-80 flex justify-between">
                                            <div className="w-40 ">
                                                {errors.cvv && touched.cvv ?
                                                    (<label className="text-red-500 text-sm">{errors.cvv}</label>) : null}            
                                                <Field className={`${smInptStyle} ${errors.cvv && touched.cvv ? 'border-red-500 shake' : 'border-blue-800'}`}
                                                    id={'cvv'}
                                                    name={'cvv'}
                                                    placeholder={'CVV'}                  
                                                    type={'number'}
                                                />
                                            </div>
                                                <div className="w-40 ">
                                                    {errors.validade && touched.validade ?
                                                        (<label className="text-red-500 text-sm">{errors.validade}</label>) : null}
                                                    <Field className={`${smInptStyle} ${errors.validade && touched.validade ? 'border-red-500 shake' : 'border-blue-800'}`}
                                                        id={'validade'}
                                                        name={'validade'}
                                                        placeholder={'Validade'}                  
                                                        type={'text'}
                                                                
                                                    />
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                    <div className="text-2xl 
                                                    w-80 
                                                    md:w-full 
                                                    text-center 
                                                    text-green-500
                                    ">
                                        <h1>
                                        Preencha seus dados para adquirir o seu veículo:
                                        </h1>
                                    </div>
                                <div className="space-y-8 
                                                md:space-y-0 
                                                md:space-x-8 
                                                md:flex 
                                                md:flex-row
                                ">
                                    <div className="space-y-8">
                                        <div className="w-80 ">
                                            {errors.firstName && touched.firstName ?
                                                (<label className="text-red-500 text-sm">
                                                    {errors.firstName}
                                                </label>) : null
                                            }
                                            <Field className={`${lgInptStyle} ${errors.firstName && touched.firstName ? 
                                                                'border-red-500 shake' : 
                                                                'border-blue-800'}`}
                                                id={'firstName'}
                                                name={'firstName'}
                                                placeholder={'Nome'}                
                                                type={'text'}     
                                            />
                                        </div>
                                        <div className="w-80 ">
                                            {errors.lastName && touched.lastName ?
                                                (<label className="text-red-500 text-sm">
                                                    {errors.lastName}
                                                </label>) : null
                                            }
                                            <Field className={`${lgInptStyle} ${errors.lastName && touched.lastName ? 
                                                                'border-red-500 shake' : 
                                                                'border-blue-800'}`}
                                                id={'lastName'}
                                                name={'lastName'}
                                                placeholder={'Sobre Nome'}
                                                type={'text'}      
                                            />
                                        </div>
                                            <div className="w-80 ">
                                                {errors.email && touched.email ?
                                                    (<label className="text-red-500 text-sm">
                                                        {errors.email}
                                                        </label>) : null
                                                        }
                                                <Field className={`${lgInptStyle} ${errors.email && touched.email ? 
                                                                    'border-red-500 shake' : 
                                                                    'border-blue-800'}`}
                                                    id={'email'}
                                                    name={'email'}
                                                    placeholder={'Email'}
                                                    type={'text'}                                            
                                                />
                                            </div>
                                        <div className="w-80 ">
                                            {errors.cpfCnpj && touched.cpfCnpj ?
                                                (<label className="text-red-500 text-sm">
                                                    {errors.cpfCnpj}</label>) : null
                                            }
                                            <Field className={`${lgInptStyle} ${errors.cpfCnpj && touched.cpfCnpj ? 
                                                                'border-red-500 shake' : 
                                                                'border-blue-800'}`}
                                                id={'cpfCnpj'}
                                                name={'cpfCnpj'}
                                                placeholder={'CPF/CNPJ'}
                                                type={'number'}           
                                            />
                                        </div>
                                        <div className="w-80 ">
                                            {errors.cep && touched.cep ?
                                                (<label className="text-red-500 text-sm">
                                                    {errors.cep}</label>) : null
                                            }
                                            <Field className={`${lgInptStyle} ${errors.cep && touched.cep ? 
                                                                'border-red-500 shake' : 
                                                                'border-blue-800'}`}
                                                id={'cep'}
                                                name={'cep'}
                                                placeholder={'CEP'}
                                                type={'number'}
                                                onBlur={(e: React.ChangeEvent<HTMLInputElement>) => asyncFillAddress(e.target?.value, setFieldValue)}
                                            />
                                        </div>
                                    </div>
                                        <div className="space-y-8">
                                            <div className="w-80 ">
                                                {errors.endereco && touched.endereco ?
                                                    (<label className="text-red-500 text-sm">
                                                        {errors.endereco}
                                                    </label>) : null
                                                }
                                                <Field className={`${lgInptStyle} ${errors.endereco && touched.endereco ? 
                                                                    'border-red-500 shake' : 
                                                                    'border-blue-800'}`}
                                                    id={'endereco'}
                                                    name={'endereco'}
                                                    placeholder={'Endereço'}
                                                    type={'text'}
                                                    disabled={false}     
                                                />
                                            </div>
                                            <div className="w-80 flex justify-between">
                                                <div className="w-80 w-full">
                                                    {errors.numero && touched.numero ?
                                                        (<label className="text-red-500 text-sm">
                                                            {errors.numero}
                                                        </label>) : null
                                                    }
                                                    <Field className={`${smInptStyle} ${errors.numero && touched.numero ? 
                                                                        'border-red-500 shake' : 
                                                                        'border-blue-800'}`}
                                                        id={'numero'}
                                                        name={'numero'}
                                                        placeholder={'Número'}                  
                                                        type={'text'}
                                                        disabled={false}          
                                                    />
                                                </div>
                                                <div className="w-80 w-full">
                                                    {errors.complemento && touched.complemento ?
                                                        (<label className="text-red-500 text-sm">
                                                            {errors.complemento}
                                                        </label>) : null}
                                                    <Field className={`${smInptStyle} ${errors.complemento && touched.complemento ? 
                                                                        'border-red-500 shake' : 
                                                                        'border-blue-800'}`}
                                                        id={'complemento'}
                                                        name={'complemento'}
                                                        placeholder={'Complemento'}                  
                                                        type={'text'}
                                                        disabled={false}           
                                                    />
                                                </div>
                                            </div>
                                                <div className="w-80 ">
                                                    {errors.cidade && touched.cidade ?
                                                        (<label className="text-red-500 text-sm">
                                                            {errors.cidade}
                                                        </label>) : null
                                                    }
                                                    <Field className={`${lgInptStyle} ${errors.cidade && touched.cidade ? 
                                                                        'border-red-500 shake' : 
                                                                        'border-blue-800'}`}
                                                        id={'cidade'}
                                                        name={'cidade'}
                                                        placeholder={'Cidade'}
                                                        type={'text'}
                                                        disabled={false}           
                                                    />
                                                </div>
                                            <div className="w-80 ">
                                                {errors.bairro && touched.bairro ?
                                                    (<label className="text-red-500 text-sm">
                                                        {errors.bairro}</label>) : null
                                                }
                                                <Field className={`${lgInptStyle} ${errors.bairro && touched.bairro ? 
                                                                    'border-red-500 shake' : 
                                                                    'border-blue-800'}`}
                                                    id={'bairro'}
                                                    name={'bairro'}
                                                    placeholder={'Bairro'}
                                                    type={'text'}
                                                    disabled={false}           
                                                />
                                            </div>
                                                <div className="w-80 ">
                                                    {errors.estado && touched.estado ?
                                                        (<label className="text-red-500 text-sm">
                                                            {errors.estado}
                                                        </label>) : null
                                                    }
                                                    <Field className={`${lgInptStyle} ${errors.estado && touched.estado ? 
                                                                        'border-red-500 shake' : 
                                                                        'border-blue-800'}`}
                                                        id={'estado'}
                                                        name={'estado'}
                                                        placeholder={'Estado'}
                                                        typed={'text'}
                                                        disabled={false}           
                                                    />
                                                </div>
                                        </div>
                                </div>
                                <div className="md:flex md:space-x-8">
                                    <Policy />
                                    <EmailCheckbox />
                                </div>

                                <div onClick={() => showToasts(isValidating)}
                                    className="w-full 
                                                flex 
                                                justify-center"
                                >
                                    <Button txt={'COMPRAR'} />
                                    <Toaster position="bottom-center"/>
                                </div>
                            </div>
                        </Form>)}
                    </Formik>
                </div>
            </div>
        </motion.div>
  );
}

export default observer(Checkout);
