import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

export default class ListarVaga extends Component {

    render() {

        return <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>CARGO</TableCell>
                    <TableCell>CIDADE</TableCell>
                    <TableCell>ESTADO</TableCell>
                    <TableCell>DESCRIÇÃO</TableCell>
                    <TableCell>EMPRESA</TableCell>
                    <TableCell>AÇÃO</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {this.props.listarVagas.map(
                    (vaga) => <TableRow key={vaga.id}>
                        <TableCell>{vaga.id}</TableCell>
                        <TableCell>{vaga.cargo}</TableCell>
                        <TableCell>{vaga.cidade}</TableCell>
                        <TableCell>{vaga.estado}</TableCell>
                        <TableCell>{vaga.descricao}</TableCell>
                        <TableCell>{vaga.empresa ? vaga.empresa.nome : ""}</TableCell>

                        <TableCell>
                            <Button onClick={() => this.props.onExcluir(vaga)}color="primary">
                            Excluir
                            </Button>
                            <Button onClick={() => this.props.onEditar(vaga)}color="secondary">    
                           Editar
                           </Button>
                           {vaga.candidato?"":<Button onClick={() => this.props.onAdicionarCandidato(vaga)}color="secondary"> 
                               Adicionar Candidato
                           </Button>}
                           
                        </TableCell>

                        </TableRow>
                )}


            </TableBody>
        </Table>;
    }
}