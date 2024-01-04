package Proekt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ОтчОРасОсМат
 */
@Entity(name = "IISProektОтчОРасОсМат")
@Table(schema = "public", name = "ОтчОРасОсМат")
public class OtchORasOsMat {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КолПоАктТек")
    private Integer колпоакттек;

    @Column(name = "НормаРасхода")
    private Integer нормарасхода;

    @Column(name = "СуммаИтого")
    private Float суммаитого;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;


    public OtchORasOsMat() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКолПоАктТек() {
      return колпоакттек;
    }

    public void setКолПоАктТек(Integer колпоакттек) {
      this.колпоакттек = колпоакттек;
    }

    public Integer getНормаРасхода() {
      return нормарасхода;
    }

    public void setНормаРасхода(Integer нормарасхода) {
      this.нормарасхода = нормарасхода;
    }

    public Float getСуммаИтого() {
      return суммаитого;
    }

    public void setСуммаИтого(Float суммаитого) {
      this.суммаитого = суммаитого;
    }


}