import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class Usuario extends Component {
    constructor(props) {
        super(props);
        if (this.props.editar) {
            this.state = {
                id: this.props.editar.id,
                nome: this.props.editar.nome,
                email:this.props.editar.email,
                login:this.props.editar.login,
                
            }
        } else {
            this.state = {
                nome: "",
                email:"",
                login: "",
                novaSenha: "",
                
            };
        }
        

    }
    setParam(param, valor) {
        this.setState({
            [param]: valor
        });
    }
    enviar() {
        if (this.state.id) {
            this.props.onEditar({
                id: this.state.id,
                nome: this.state.nome,
                email: this.state.email,
                login: this.state.login,
                
            })

        }else{
            this.props.onAdicionar({
                nome: this.state.nome,
                email:this.state.email,
                login: this.state.login,
                novaSenha: this.state.novaSenha,
               

            });
        }
        this.setState({
            id: "",
            nome: "",
            email:"",
            login: "",
            novaSenha: "",
            
        });
    }
    render() {
        return <Dialog
        open={true}
    >
             <DialogTitle>{this.state.id?
            <h3> Editar Usuario {this.state.nome}  </h3>:
                <h3>Cadastrar Usuario</h3> }</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Nome"
                    fullWidth
                    value={this.state.nome}
                    onChange={(evento) => this.setParam('nome', evento.target.value)}
                />
                 <TextField
                    autoFocus
                    margin="dense"
                    label="Email"
                    fullWidth
                    value={this.state.email}
                    onChange={(evento) => this.setParam('email', evento.target.value)}
                />
                 <TextField
                    autoFocus
                    margin="dense"
                    label="Login"
                    fullWidth
                    value={this.state.login}
                    onChange={(evento) => this.setParam('login', evento.target.value)}
                />
                {this.state.id? "":<TextField
                    autoFocus
                    margin="dense"
                    label="Senha"
                    fullWidth
                    type="password"
                    value={this.state.novaSenha}
                    onChange={(evento) => this.setParam('novaSenha', evento.target.value)}
                />}
                {this.state.id?"":<TextField
                    autoFocus
                    margin="dense"
                    label="Permissões"
                    fullWidth
                    value={this.state.permissoes}
                    onChange={(evento) => this.setParam('permissoes', evento.target.value)}
                />}
                 
            </DialogContent>
            <DialogActions>
                <Button onClick={() => this.enviar()} color="primary">
                {this.state.id ? "Confirmar" : "Adicionar"}
              </Button>
                <Button onClick={() => { this.props.onCancelar() }} color="secondary">
                Cancelar
              </Button>
            </DialogActions>
            </Dialog>

    }
}