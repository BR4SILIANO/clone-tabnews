function status(request, response) {
  response.status(200).json({ alunos: "São acima da Média" });
}
export default status;
