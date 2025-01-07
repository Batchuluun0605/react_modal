import { useEffect, useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modal]);

  return (
    <div className="container">
      <button className="toggle-btn" onClick={toggleModal}>
        Open
      </button>
      {modal && (
        <>
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <h2>Hello modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              corrupti molestias ab similique odit dolorem, ex sunt praesentium,
              fugit nam ipsa vitae exercitationem totam at, laudantium itaque.
              Pariatur possimus voluptate, iusto ipsa eligendi omnis deserunt
              cum blanditiis deleniti quae ea placeat aut quas quidem aperiam
              ullam numquam quam.
            </p>
            <button onClick={toggleModal} className="close-btn">
              x
            </button>
          </div>
        </>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ab
        pariatur quae velit alias laudantium, eveniet esse dolores dolorum
        assumenda totam cupiditate in? Voluptatem, sapiente quo ipsum quasi
        ipsam pariatur accusamus amet facilis. Nisi sint exercitationem quo
        doloremque illum assumenda molestiae, corrupti cupiditate deleniti, vel
        commodi maxime nesciunt voluptate laborum. Praesentium corporis iusto
        eum dicta repellendus, aperiam voluptatum dolorem sit commodi itaque
        blanditiis accusamus adipisci quisquam quis aut sint maxime quod error.
        Reprehenderit, amet? Alias, voluptatem ex voluptas quasi omnis ut
        blanditiis minus pariatur qui similique, quos distinctio. Facere illo
        quo commodi quidem dignissimos quam temporibus eum animi nulla!
        Asperiores, distinctio, vitae nemo cupiditate perferendis sit quae ex
        quidem, quis doloribus itaque saepe velit magnam iusto soluta blanditiis
        quas facilis iste reprehenderit quos. Sapiente distinctio vitae natus
        cum praesentium laudantium, facilis id animi, adipisci nihil quisquam
        quam sint, nisi accusamus. Adipisci quasi harum vitae quam magni,
        corrupti, eum tempora facilis eveniet enim fuga? Accusamus, totam?
        Consequuntur hic et alias quod. Esse omnis totam saepe modi ad autem
        suscipit recusandae distinctio nihil sapiente asperiores, placeat
        cumque! Nihil, omnis tenetur quisquam suscipit totam reiciendis ipsum,
        earum nostrum beatae deserunt voluptates pariatur delectus dolore
        provident illum dicta accusamus? Laborum asperiores non fuga vitae quas
        eius nulla mollitia, iure nostrum atque! Ipsa harum nostrum, ullam
        aliquam consequatur soluta ratione tempora, porro reprehenderit
        recusandae nihil voluptas autem aperiam adipisci. Ullam voluptatibus
        quae rem blanditiis! Perspiciatis, quod? Ullam iure id, quisquam
        laudantium ducimus architecto dolores impedit. Obcaecati officia
        accusantium quo inventore! Explicabo ipsa non doloribus ab. Non ducimus
        unde expedita magnam nostrum nesciunt, labore odio doloremque quia rerum
        maxime placeat omnis, id, error vero. Architecto ullam perferendis
        accusamus magni quis deleniti eos molestiae, iusto rem rerum,
        exercitationem, at illum eveniet ipsam facere itaque est iure nisi.
        Cupiditate, impedit eos! Sequi ratione laudantium soluta natus nulla
        sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ab
        pariatur quae velit alias laudantium, eveniet esse dolores dolorum
        assumenda totam cupiditate in? Voluptatem, sapiente quo ipsum quasi
        ipsam pariatur accusamus amet facilis. Nisi sint exercitationem quo
        doloremque illum assumenda molestiae, corrupti cupiditate deleniti, vel
        commodi maxime nesciunt voluptate laborum. Praesentium corporis iusto
        eum dicta repellendus, aperiam voluptatum dolorem sit commodi itaque
        blanditiis accusamus adipisci quisquam quis aut sint maxime quod error.
        Reprehenderit, amet? Alias, voluptatem ex voluptas quasi omnis ut
        blanditiis minus pariatur qui similique, quos distinctio. Facere illo
        quo commodi quidem dignissimos quam temporibus eum animi nulla!
        Asperiores, distinctio, vitae nemo cupiditate perferendis sit quae ex
        quidem, quis doloribus itaque saepe velit magnam iusto soluta blanditiis
        quas facilis iste reprehenderit quos. Sapiente distinctio vitae natus
        cum praesentium laudantium, facilis id animi, adipisci nihil quisquam
        quam sint, nisi accusamus. Adipisci quasi harum vitae quam magni,
        corrupti, eum tempora facilis eveniet enim fuga? Accusamus, totam?
        Consequuntur hic et alias quod. Esse omnis totam saepe modi ad autem
        suscipit recusandae distinctio nihil sapiente asperiores, placeat
        cumque! Nihil, omnis tenetur quisquam suscipit totam reiciendis ipsum,
        earum nostrum beatae deserunt voluptates pariatur delectus dolore
        provident illum dicta accusamus? Laborum asperiores non fuga vitae quas
        eius nulla mollitia, iure nostrum atque! Ipsa harum nostrum, ullam
        aliquam consequatur soluta ratione tempora, porro reprehenderit
        recusandae nihil voluptas autem aperiam adipisci. Ullam voluptatibus
        quae rem blanditiis! Perspiciatis, quod? Ullam iure id, quisquam
        laudantium ducimus architecto dolores impedit. Obcaecati officia
        accusantium quo inventore! Explicabo ipsa non doloribus ab. Non ducimus
        unde expedita magnam nostrum nesciunt, labore odio doloremque quia rerum
        maxime placeat omnis, id, error vero. Architecto ullam perferendis
        accusamus magni quis deleniti eos molestiae, iusto rem rerum,
        exercitationem, at illum eveniet ipsam facere itaque est iure nisi.
        Cupiditate, impedit eos! Sequi ratione laudantium soluta natus nulla
      </p>
    </div>
  );
};

export default Modal;
